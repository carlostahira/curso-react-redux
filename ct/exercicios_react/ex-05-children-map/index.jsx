import React from 'react';
import ReactDOM from 'react-dom';

import Family from './family';
import Member from './member';

ReactDOM.render(
    <Family lastname="Silvas">
        <Member name="Joao" />
        <Member name="Rafael" />
    </Family>
, document.getElementById('app'));