export default {

    name: 'daybook',
    component: () => import('@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            // No entry selected
            path: '',
            name: 'no-entry',
            component: () => import('../../daybook/views/NoEntrySelected.vue'),
        }, 
        {
            path: ':id',
            name: 'entry',
            component: () => import('../../daybook/views/EntryView.vue'),
        }
    ]




}