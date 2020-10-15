<?php

namespace Biz\InformationCollect\FormItem;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class BirthdayFormItem extends FormItem
{
    const TYPE = 'DatePicker';

    const TITLE = '生日';

    const FIELD = 'birthday';

    public function getData()
    {
        return [
            'type' => self::TYPE,
            'title' => self::TITLE,
            'field' => self::FIELD,
            'value' => $this->value,
            'group' => self::BASE_INFO_GROUP,
            'builderType' => TextType::class,
            'builderOptions' => [
                'attr' => ['placeholder' => '请选择出生年月日',]
            ],
            'props' => [
                'type' => 'date',
                'format' => 'yyyy-MM-dd',
                'placeholder' => '请选择出生年月日',
            ],
            'validate' => [
                ['required' => $this->required, 'message' => self::TITLE . '不能为空'],
            ],
        ];
    }
}
