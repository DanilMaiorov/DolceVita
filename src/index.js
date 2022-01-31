
import { animate } from './modules/helpers';
import { validation } from './modules/validation';
import { modal } from './modules/modal';
import { scroll } from './modules/scroll';
import { priceSlider } from './modules/priceSlider';
import { sendForm } from './modules/sendForm';
//import { sendService } from './modules/sendService';

modal();
scroll();
priceSlider();
sendForm({ formId: 'form1', someElem: [
    {
        type: 'textarea',
        id: 'form1-message',
    },
]});
sendForm({ formId: 'form2' })

//sendService()