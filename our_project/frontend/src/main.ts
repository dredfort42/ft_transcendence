import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { createApp } from 'vue';
import App from '@/AppRouter.vue';
import components from '@/components/UI';
import directives from '@/directives';
import router from '@/router';
import store from '@/store';

const app = createApp(App);

components.forEach(component => {
	app.component(component.name, component);
});

directives.forEach(directive => {
	app.directive(directive.name, directive);
});

app.use(store).use(router).mount('#app');