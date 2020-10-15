<?php

namespace Biz\InformationCollect\FormItem;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class QQFormItem extends FormItem
{
    const TYPE = 'input';

    const TITLE = 'QQ号';

    const FIELD = 'qq';

    public function getData()
    {
        return [
            'type' => self::TYPE,
            'title' => self::TITLE,
            'field' => self::FIELD,
            'group' => self::CONTACT_INFO_GROUP,
            'value' => $this->value,
            'builderType' => TextType::class,
            'validate' => [
                ['required' => $this->required, 'message' => self::TITLE.'不能为空'],
                ['pattern' => '^[0-9]{5,10}$', 'message' => self::TITLE.'格式错误'],
            ],
        ];
    }
}
