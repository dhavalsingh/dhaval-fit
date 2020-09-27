// Data for Weight Loss curve


export const data = [
    {
        date: "2020-09-05",
        value: 79,
    },
    {
        date: "2020-09-06",
        value: 78.5,
    },
    {
        date: "2020-09-07",
        value: 78.7,
    },
    {
        date: "2020-09-08",
        value: 78.5,
    },
    {
        date: "2020-09-09",
        value: 78.2,
    },
    {
        date: "2020-09-10",
        value: 78.2,
    },
    {
        date: "2020-09-11",
        value: 78.4,
    },
    {
        date: "2020-09-12",
        value: 78.3,
    },
    {
        date: "2020-09-13",
        value: 78.3,
    },
    {
        date: "2020-09-14",
        value: 79.4,
    },
    {
        date: "2020-09-15",
        value: 78.6,
    },
    {
        date: "2020-09-16",
        value: 78.6,
    },
    {
        date: "2020-09-17",
        value: 78.3,
    },
    {
        date: "2020-09-18",
        value: 78.2,
    },
    {
        date: "2020-09-19",
        value: 78.1,
    },
    {
        date: "2020-09-20",
        value: 78,
    },
    {
        date: "2020-09-21",
        value: 78.3,
    },
    {
        date: "2020-09-22",
        value: 77.7,
    },
    {
        date: "2020-09-23",
        value: 77.6,
    },
    {
        date: "2020-09-24",
        value: 77.8,
    },
    {
        date: "2020-09-25",
        value: 77.3,
    },
    {
        date: "2020-09-26",
        value: 77.5,
    },
    { date: "2020-09-27", value: 76.9 },
];

export const config = {
    data,
    forceFit: true,
    title: {
        visible: true,
        text: "Weight Loss Curve",
    },
    padding: "auto",
    xField: "date",
    yField: "value",
    responsive: true,
    smooth: true,
    yAxis: {
        min: 69,
        max: 86,
    },
    point: {
        visible: true,
    },
    label: {
        visible: false,
        type: "point",
    },
    animation: { appear: { animation: "clipingWithData" } },
};