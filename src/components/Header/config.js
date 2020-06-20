export default [{
    url: '/dashboard',
    label: 'Dashboard',
    showTo: ['admin', 'employee']
},
    {
        url: '/people',
        label: 'People',
        showTo: ['admin'],
        subNav: [{
            url: '/people',
            label: 'Employees'
        }, {
            url: '/people/applicants',
            label: 'Applicants'
        }, {
            url: '/people/onboardings',
            label: 'Workflows'
        }, {
            url: '/people/setup/available-fields',
            label: 'Setup'
        }],
    },
    {
        url: '/conversations',
        label: 'Conversations',
        showTo: ['admin', 'employee']
    },
    {
        url: '/surveys',
        label: 'Surveys',
        showTo: ['admin'],
        subNav: [
            {
                url: '/surveys',
                label: 'Surveys'
            },
            {
                url: '/surveys/questions',
                label: 'Questions'
            }
        ]
    },
    {
        url: '/actions/all',
        label: 'Actions',
        showTo: ['admin', 'employee']
    }];
