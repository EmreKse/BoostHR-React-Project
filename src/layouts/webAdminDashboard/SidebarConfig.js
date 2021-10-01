import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import listFill from '@iconify/icons-eva/list-fill';
import calendarFill from '@iconify/icons-eva/calendar-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Özet',
    path: '/webAdmin/main',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Şirketler',
    path: '/webAdmin/companies',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Raporlar',
    path: '/webAdmin/reports',
    icon: getIcon(listFill)
  },
  {
    title: 'Takvim',
    path: '/webAdmin/calendar',
    icon: getIcon(calendarFill)
  }
];

export default sidebarConfig;
