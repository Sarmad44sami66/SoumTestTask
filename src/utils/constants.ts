const GIFS_PER_PAGE_RESPONSE_SIZE = 15;

const TREE_DATA = [
    {
        title: "Phones",
        id: 1,
        subCategory: [
            {
                id: 1_1,
                title: 'Apple',
                subCategory: [
                    {
                        id: 1_1_1,
                        title: 'iPhon6',
                        subCategory: [
                            {
                                id: 1_1_1_1,
                                title: '128GB'
                            },
                            {
                                title: '256GB',
                                id: 1_1_1_2,
                            }
                        ]
                    },
                    {
                        title: 'iPhon7',
                        id: 1_1_2
                    }
                ]
            },
            {
                title: 'Samsung',
                id: 1_2,
                subCategory: [
                    {
                        title: 'S1',
                        id: 1_2_1,
                        subCategory: [
                            { title: '128GB', id: 1_2_1_1, },
                            { title: '256GB', id: 1_2_1_2, }
                        ]
                    },
                    {
                        title: 'S2',
                        id: 1_2_2,
                        subCategory: [
                            { title: '128GB', id: 1_2_2_1, },
                            { title: '256GB', id: 1_2_2_2, }
                        ]
                    },
                    {
                        title: 'S3',
                        id: 1_2_3,
                        subCategory: [
                            { title: '128GB', id: 1_2_3_1, },
                            { title: '256GB', id: 1_2_3_2, }
                        ]
                    },
                    {
                        title: 'S4',
                        id: 1_2_4,
                        subCategory: [
                            { title: '128GB', id: 1_2_4_1, },
                            { title: '256GB', id: 1_2_4_2, }
                        ]
                    },
                ]
            },
        ],
    },
    {
        title: "Laptops",
        id: 2,
        subCategory: [
            {
                title: 'Lonovo',
                id: 2_1,
                subCategory: [
                    {
                        title: 'Lonovo 01',
                        id: 2_1_1,
                        subCategory: [
                            { title: '128GB', id: 2_1_1_1 },
                            { title: '256GB', id: 2_1_1_2 }
                        ]
                    },
                    { title: 'Lonovo 02', id: 2_1_2, }
                ]
            },
            { title: 'Dell', id: 2_1_3, }
        ],
    },
    {
        title: "Watchhes",
        id: 3,
        subCategory: [
            {
                title: 'Oppo',
                id: 3_1,
                subCategory: [
                    {
                        title: 'Oppo 01',
                        id: 3_1_1,
                        subCategory: [
                            { title: '128GB', id: 3_1_1_1, },
                            { title: '256GB', id: 3_1_1_2, }
                        ]
                    },
                    { title: 'Oppo 01', id: 3_1_2, }
                ]
            },
            { title: 'Redmi', id: 3_1_3, }
        ],
    },
]

export {GIFS_PER_PAGE_RESPONSE_SIZE , TREE_DATA};
