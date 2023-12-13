import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default function useDocumentTitle(defaultTitle) {
    const route = useRoute();
    const router = useRouter();
    const pageTitle = ref(defaultTitle);

    const updateTitle = () => {
        document.title = pageTitle.value;
    };

    const handleRouteChange = () => {
        const routeTitle = route.meta.title;
        pageTitle.value = routeTitle || defaultTitle;
        updateTitle();
    };

    onMounted(() => {
        handleRouteChange();
        router.afterEach(handleRouteChange);
    });

    onUnmounted(() => {
        document.title = defaultTitle;
        router.afterEach(null);
    });

    return {
        pageTitle,
    };
}
