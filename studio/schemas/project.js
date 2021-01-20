export default {
    name: "project",
    title: "Project",
    type: "document",
    fields:[
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ]
        },
        {
            name: "languages",
            type: "array",
            of: [
                {
                    type: "string",
                }
            ],
            options: {
                list: [
                    {title: 'C++', value: 'C++'},
                    {title: 'C', value: 'C'},
                    {title: 'Java', value: 'Java'},
                    {title: 'JavaScript', value: 'JavaScript'},
                    {title: 'Python', value: 'Python'},
                    {title: 'MATLAB', value: 'MATLAB'},
                    {title: 'Ruby', value: 'Ruby'},
                    {title: 'XML', value: 'XML'},
                    {title: 'Assembly', value: 'Assemble'},
                ]
            },
            validation: Rule => Rule.unique()
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    {
                        value: "Personal", title: "Personal" 
                    },
                    {
                        value: "Client", title: "Client"
                    },
                    {
                        value: "Academic", title: "Academic"
                    },
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags"
            },
        },
    ],
    orderings: [
        {
            title: "Project Date, New",
            name: "dateDesc",
            by: [
                {
                    field: 'date', direction: 'desc'
                }
            ]
        },
        {
            title: "Project Date, Old",
            name: "dateAsc",
            by: [
                {
                    field: 'date', direction: 'asc'
                }
            ]
        }
    ]
};