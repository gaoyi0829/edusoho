<?php

namespace Biz\Certificate\Service\Impl;

use AppBundle\Common\ArrayToolkit;
use Biz\BaseService;
use Biz\Certificate\CertificateException;
use Biz\Certificate\Dao\RecordDao;
use Biz\Certificate\Service\CertificateService;
use Biz\Certificate\Service\RecordService;

class RecordServiceImpl extends BaseService implements RecordService
{
    public function get($id)
    {
        return $this->getRecordDao()->get($id);
    }

    public function count($conditions)
    {
        return $this->getRecordDao()->count($conditions);
    }

    public function search($conditions, $orderBys, $start, $limit, $columns = [])
    {
        return $this->getRecordDao()->search($conditions, $orderBys, $start, $limit, $columns);
    }

    public function findExpiredRecords($certificateId)
    {
        return $this->getRecordDao()->findExpiredRecords($certificateId);
    }

    public function cancelRecord($id)
    {
        $record = $this->get($id);
        if (empty($record)) {
            $this->createNewException(CertificateException::NOTFOUND_RECORD());
        }

        if ('valid' != $record['status']) {
            $this->createNewException(CertificateException::FORBIDDEN_CANCEL_RECORD());
        }

        return $this->getRecordDao()->update($id, ['status' => 'cancelled']);
    }

    public function grantRecord($id, $fields)
    {
        $record = $this->get($id);
        if (empty($record)) {
            $this->createNewException(CertificateException::NOTFOUND_RECORD());
        }

        if ('cancelled' != $record['status']) {
            $this->createNewException(CertificateException::FORBIDDEN_CANCEL_RECORD());
        }

        $fields = ArrayToolkit::parts($fields, ['issueTime']);

        $fields['status'] = 'valid';

        return $this->getRecordDao()->update($id, $fields);
    }

    public function isObtained($userId, $certificateId)
    {
        $isObtained = $this->getRecordDao()->search(
            ['userId' => $userId, 'certificateId' => $certificateId, 'statuses' => ['valid', 'expired']],
            [],
            0,
            1
        );

        return empty($isObtained) ? false : true;
    }

    public function isCertificatesObtained($userId, $certificateIds)
    {
        $obtaineds = $this->getRecordDao()->search(
            ['statuses' => ['valid', 'expired'], 'userId' => $userId, 'certificateIds' => $certificateIds],
            [],
            0,
            PHP_INT_MAX
        );

        $isObtaineds = [];
        $obtaineds = ArrayToolkit::index($obtaineds, 'certificateId');
        foreach ($certificateIds as $certificateId) {
            $isObtaineds[$certificateId] = isset($obtaineds[$certificateId]) ? true : false;
        }

        return $isObtaineds;
    }

    public function passCertificateRecord($id, $auditUser, $rejectReason = '')
    {
        $record = $this->get($id);
        $certificate = $this->getCertificateService()->get($record['certificateId']);
        if (empty($record)) {
            $this->createNewException(CertificateException::NOTFOUND_RECORD);
        }

        if ('reject' !== $record['status'] && 'none' !== $record['status']) {
            $this->createNewException(CertificateException::FORBIDDEN_VALID_RECORD);
        }

        $record['rejectReason'] = $rejectReason;
        $record['auditUserId'] = $auditUser['id'];
        $record['auditTime'] = $record['issueTime'] = time();
        $record['status'] = 'valid';
        $record['expiryTime'] = (0 == $certificate['expiryDay']) ? 0 : strtotime(date('Y-m-d', time() + 24 * 3600 * (int) $certificate['expiryDay']));

        return $this->getRecordDao()->update($id, $record);
    }

    public function rejectCertificateRecord($id, $auditUser, $rejectReason = '')
    {
        $record = $this->get($id);
        if (empty($record)) {
            $this->createNewException(CertificateException::NOTFOUND_RECORD);
        }

        if ('reject' !== $record['status'] && 'none' !== $record['status']) {
            $this->createNewException(CertificateException::FORBIDDEN_REJECT_RECORD);
        }

        $record['rejectReason'] = $rejectReason;
        $record['auditUserId'] = $auditUser['id'];
        $record['auditTime'] = $record['issueTime'] = time();
        $record['status'] = 'reject';

        return $this->getRecordDao()->update($id, $record);
    }

    public function resetCertificateRecord($id, $rejectReason = '')
    {
        $record = $this->get($id);
        if (empty($record)) {
            $this->createNewException(CertificateException::NOTFOUND_RECORD);
        }

        if ('reject' !== $record['status'] && 'none' !== $record['status']) {
            $this->createNewException(CertificateException::FORBIDDEN_AUDIT_RECORD);
        }

        $record['rejectReason'] = $rejectReason;
        $record['auditUserId'] = null;
        $record['auditTime'] = null;
        $record['status'] = 'none';

        return $this->getRecordDao()->update($id, $record);
    }

    /**
     * @return CertificateService
     */
    protected function getCertificateService()
    {
        return $this->createService('Certificate:CertificateService');
    }

    /**
     * @return RecordDao
     */
    protected function getRecordDao()
    {
        return $this->createDao('Certificate:RecordDao');
    }
}
