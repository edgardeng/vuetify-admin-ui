import Layout from '@/views/layout';
import Icon from '@/views/widgets/icon';
import Alert from '@/views/widgets/alert';
import Avatar from '@/views/widgets/avatar';

const routes = {
  path: '/widgets', component: Layout, header: 'menu.widget', name: 'menu.widget', redirect: "/widget/icon", icon: "mdi-widgets",
  children: [
    { path: "/widget/icon", name: "menu.icon", component: Icon },
    { path: "/widget/alert", name: "menu.alert", component: Alert },
    { path: "/widget/avatar", name: "menu.avatar", component: Avatar }
  ]
}

export default routes
