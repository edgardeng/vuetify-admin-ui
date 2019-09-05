import { Layout } from '../index'

const Markdown = () => import(/* webpackChunkName: "pdf" */ '@/views/components/MarkdownEditor.vue')
const Sql = () => import(/* webpackChunkName: "pdf" */ '@/views/components/SqlEditor.vue')
const RichText = () => import(/* webpackChunkName: "pdf" */ '@/views/components/TinymceEditor.vue')

const routes = {
  path: '/components', component: Layout, icon: 'mdi-widgets' , name: 'menu.component', redirect: "/markdown",
  children: [
    { path: '/markdown', component: Markdown, name: 'menu.md_editor'},
    { path: '/sql', component: Sql, name: 'menu.sql_editor'},
    { path: '/rich-text', component: RichText, name: 'menu.rich_text'}
  ]
}

export default routes
