import note from '../Logos/note.svg';
import danger from '../Logos/danger.svg'
export const data = [
    {
        number:7,
        title:'تجهیز با دستور کار های برنامه ریزی نشده',
        color:'#249B4D',
        name:'ترانسفورماتور',
        logo:danger,
        id:'DS-12345678899',
        performance:0.5,
        explanation:'نسبت دستور کار های لغو شده به کل دستور کار ها'
    },
    {
        number:12,
        title:'درخواست کار باز',
        color:'#B9131C',
        name:'توربین شماره یک',
        logo:danger,
        id:'T-962372363',
        performance:96/100,
        explanation:'نسبت دستور کار های در انتظار برنامه ریزی به کل دستور کار ها'
    },
    {
        number:145,
        title:'دستور کار برنامه ریزی شده',
        color:'#249B4D',
        name:'پره کولینگ موتور خانه مرکزی',
        logo:note,
        id:'WQ-234328974',
        performance:46/100,
        explanation:'نسبت دستور کار های اضطراری به کل دستور کار ها'
    },
]