import React from 'react';
import {Button} from 'antd';

type AssetProps = {
    name:string
}

export const Asset= ({name}:AssetProps) => {
return(
<Button>{name}</Button>
)
}
