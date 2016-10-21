/// <reference path="jquery-1.8.2.min.js" />



//座位类型
var holdSeat = {
    seatType: {

        //***********16座位类型**************
        seat16: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: true },
                    //5行4座
                    { isExist: true }
                ]
            }
        ],

        //***********19座位类型**************
        seat19: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: true },
                    //5行4座
                    { isExist: true }
                ]
            }
        ],

        //***********20座位类型**************
        seat20: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: false },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: false }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: true },
                    //7行4座
                    { isExist: true }
                ]
            }
        ],

        //***********33座位类型**************
        seat33: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: true },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            }
        ],

        //***********35座位类型**************
        seat35: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: false },
                    //1行2座
                    { isExist: false },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: true },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            }
        ],

        //***********37座位类型**************
        seat37: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: true },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            }
        ],

        //***********45座位类型**************
        seat45: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: false },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            },
            //10行
            {
                seats: [
                    //10行1座
                    { isExist: true },
                    //10行2座
                    { isExist: true },
                    //10行3座
                    { isExist: false },
                    //10行4座
                    { isExist: true },
                    //10行5座
                    { isExist: true }
                ]
            },
            //11行
            {
                seats: [
                    //11行1座
                    { isExist: true },
                    //11行2座
                    { isExist: true },
                    //11行3座
                    { isExist: true },
                    //11行4座
                    { isExist: true },
                    //11行5座
                    { isExist: true }
                ]
            }
        ],


        //***********49座位类型**************
        seat49: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: false },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            },
            //10行
            {
                seats: [
                    //10行1座
                    { isExist: true },
                    //10行2座
                    { isExist: true },
                    //10行3座
                    { isExist: false },
                    //10行4座
                    { isExist: true },
                    //10行5座
                    { isExist: true }
                ]
            },
            //11行
            {
                seats: [
                    //11行1座
                    { isExist: true },
                    //11行2座
                    { isExist: true },
                    //11行3座
                    { isExist: false },
                    //11行4座
                    { isExist: true },
                    //11行5座
                    { isExist: true }
                ]
            },
            //12行
            {
                seats: [
                    //12行1座
                    { isExist: true },
                    //12行2座
                    { isExist: true },
                    //12行3座
                    { isExist: true },
                    //12行4座
                    { isExist: true },
                    //12行5座
                    { isExist: true }
                ]
            }
        ],
        //***********51座位类型**************
        seat51: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: false },
                    //7行5座
                    { isExist: false }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: false },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            },
            //10行
            {
                seats: [
                    //10行1座
                    { isExist: true },
                    //10行2座
                    { isExist: true },
                    //10行3座
                    { isExist: false },
                    //10行4座
                    { isExist: true },
                    //10行5座
                    { isExist: true }
                ]
            },
            //11行
            {
                seats: [
                    //11行1座
                    { isExist: true },
                    //11行2座
                    { isExist: true },
                    //11行3座
                    { isExist: false },
                    //11行4座
                    { isExist: true },
                    //11行5座
                    { isExist: true }
                ]
            },
            //12行
            {
                seats: [
                    //12行1座
                    { isExist: true },
                    //12行2座
                    { isExist: true },
                    //12行3座
                    { isExist: false },
                    //12行4座
                    { isExist: true },
                    //12行5座
                    { isExist: true }
                ]
            },
            //13行
            {
                seats: [
                    //13行1座
                    { isExist: true },
                    //13行2座
                    { isExist: true },
                    //13行3座
                    { isExist: true },
                    //13行4座
                    { isExist: true },
                    //13行5座
                    { isExist: true }
                ]
            }
        ],
        //***********53座位类型**************
        seat53: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: false },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            },
            //10行
            {
                seats: [
                    //10行1座
                    { isExist: true },
                    //10行2座
                    { isExist: true },
                    //10行3座
                    { isExist: false },
                    //10行4座
                    { isExist: true },
                    //10行5座
                    { isExist: true }
                ]
            },
            //11行
            {
                seats: [
                    //11行1座
                    { isExist: true },
                    //11行2座
                    { isExist: true },
                    //11行3座
                    { isExist: false },
                    //11行4座
                    { isExist: true },
                    //11行5座
                    { isExist: true }
                ]
            },
            //12行
            {
                seats: [
                    //12行1座
                    { isExist: true },
                    //12行2座
                    { isExist: true },
                    //12行3座
                    { isExist: false },
                    //12行4座
                    { isExist: true },
                    //12行5座
                    { isExist: true }
                ]
            },
            //13行
            {
                seats: [
                    //13行1座
                    { isExist: true },
                    //13行2座
                    { isExist: true },
                    //13行3座
                    { isExist: true },
                    //13行4座
                    { isExist: true },
                    //13行5座
                    { isExist: true }
                ]
            }
        ],

        //***********57座位类型**************
        seat57: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: false },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            },
            //10行
            {
                seats: [
                    //10行1座
                    { isExist: true },
                    //10行2座
                    { isExist: true },
                    //10行3座
                    { isExist: false },
                    //10行4座
                    { isExist: true },
                    //10行5座
                    { isExist: true }
                ]
            },
            //11行
            {
                seats: [
                    //11行1座
                    { isExist: true },
                    //11行2座
                    { isExist: true },
                    //11行3座
                    { isExist: false },
                    //11行4座
                    { isExist: true },
                    //11行5座
                    { isExist: true }
                ]
            },
            //12行
            {
                seats: [
                    //12行1座
                    { isExist: true },
                    //12行2座
                    { isExist: true },
                    //12行3座
                    { isExist: false },
                    //12行4座
                    { isExist: true },
                    //12行5座
                    { isExist: true }
                ]
            },
            //13行
            {
                seats: [
                    //13行1座
                    { isExist: true },
                    //13行2座
                    { isExist: true },
                    //13行3座
                    { isExist: false },
                    //13行4座
                    { isExist: true },
                    //13行5座
                    { isExist: true }
                ]
            },
            //14行
            {
                seats: [
                    //14行1座
                    { isExist: true },
                    //14行2座
                    { isExist: true },
                    //14行3座
                    { isExist: true },
                    //14行4座
                    { isExist: true },
                    //14行5座
                    { isExist: true }
                ]
            }
        ],

        //***********65座位类型**************
        seat65: [
            //1行
            {
                seats: [
                    //1行1座
                    { isExist: true },
                    //1行2座
                    { isExist: true },
                    //1行3座
                    { isExist: false },
                    //1行4座
                    { isExist: true },
                    //1行5座
                    { isExist: true }
                ]
            },
            //2行
            {
                seats: [
                    //2行1座
                    { isExist: true },
                    //2行2座
                    { isExist: true },
                    //2行3座
                    { isExist: false },
                    //2行4座
                    { isExist: true },
                    //2行5座
                    { isExist: true }
                ]
            },
            //3行
            {
                seats: [
                    //3行1座
                    { isExist: true },
                    //3行2座
                    { isExist: true },
                    //3行3座
                    { isExist: false },
                    //3行4座
                    { isExist: true },
                    //3行5座
                    { isExist: true }
                ]
            },
            //4行
            {
                seats: [
                    //4行1座
                    { isExist: true },
                    //4行2座
                    { isExist: true },
                    //4行3座
                    { isExist: false },
                    //4行4座
                    { isExist: true },
                    //4行5座
                    { isExist: true }
                ]
            },
            //5行
            {
                seats: [
                    //5行1座
                    { isExist: true },
                    //5行2座
                    { isExist: true },
                    //5行3座
                    { isExist: false },
                    //5行4座
                    { isExist: true },
                    //5行5座
                    { isExist: true }
                ]
            },
            //6行
            {
                seats: [
                    //6行1座
                    { isExist: true },
                    //6行2座
                    { isExist: true },
                    //6行3座
                    { isExist: false },
                    //6行4座
                    { isExist: true },
                    //6行5座
                    { isExist: true }
                ]
            },
            //7行
            {
                seats: [
                    //7行1座
                    { isExist: true },
                    //7行2座
                    { isExist: true },
                    //7行3座
                    { isExist: false },
                    //7行4座
                    { isExist: true },
                    //7行5座
                    { isExist: true }
                ]
            },
            //8行
            {
                seats: [
                    //8行1座
                    { isExist: true },
                    //8行2座
                    { isExist: true },
                    //8行3座
                    { isExist: false },
                    //8行4座
                    { isExist: true },
                    //8行5座
                    { isExist: true }
                ]
            },
            //9行
            {
                seats: [
                    //9行1座
                    { isExist: true },
                    //9行2座
                    { isExist: true },
                    //9行3座
                    { isExist: false },
                    //9行4座
                    { isExist: true },
                    //9行5座
                    { isExist: true }
                ]
            },
            //10行
            {
                seats: [
                    //10行1座
                    { isExist: true },
                    //10行2座
                    { isExist: true },
                    //10行3座
                    { isExist: false },
                    //10行4座
                    { isExist: true },
                    //10行5座
                    { isExist: true }
                ]
            },
            //11行
            {
                seats: [
                    //11行1座
                    { isExist: true },
                    //11行2座
                    { isExist: true },
                    //11行3座
                    { isExist: false },
                    //11行4座
                    { isExist: true },
                    //11行5座
                    { isExist: true }
                ]
            },
            //12行
            {
                seats: [
                    //12行1座
                    { isExist: true },
                    //12行2座
                    { isExist: true },
                    //12行3座
                    { isExist: false },
                    //12行4座
                    { isExist: true },
                    //12行5座
                    { isExist: true }
                ]
            },
            //13行
            {
                seats: [
                    //13行1座
                    { isExist: true },
                    //13行2座
                    { isExist: true },
                    //13行3座
                    { isExist: false },
                    //13行4座
                    { isExist: true },
                    //13行5座
                    { isExist: true }
                ]
            },
            //14行
            {
                seats: [
                    //14行1座
                    { isExist: true },
                    //14行2座
                    { isExist: true },
                    //14行3座
                    { isExist: false },
                    //14行4座
                    { isExist: true },
                    //14行5座
                    { isExist: true }
                ]
            },
            //15行
            {
                seats: [
                    //15行1座
                    { isExist: true },
                    //15行2座
                    { isExist: true },
                    //15行3座
                    { isExist: false },
                    //15行4座
                    { isExist: true },
                    //15行5座
                    { isExist: true }
                ]
            },
            //16行
            {
                seats: [
                    //16行1座
                    { isExist: true },
                    //16行2座
                    { isExist: true },
                    //16行3座
                    { isExist: true },
                    //16行4座
                    { isExist: true },
                    //16行5座
                    { isExist: true }
                ]
            }
        ]
    },
    /**
     * 生成不同座位类型的HTML代码
     * @param {} seattype 座位类型
     */
    CreateHtmlStr: function (seattype) {
        //获取不同座位类型的JSON数据
        var _json = holdSeat.seatType[seattype];
        //var htmlstr = '<table class="top"><tr><td><div class="topSeatImg"></div>可选座位</td><td><div class="topSeatImg holded"></div>已选座位</td><td><div class="topSeatImg select"></div>已占座位</td></tr></table><table cellspacing="5">';

        var htmlstr = '<table cellspacing="5">';
        //debugger;
        //循环行
        for (var i = 0; i < _json.length; i++) {
            htmlstr += '<tr>';
            //循环列
            for (var j = 0; j < _json[i].seats.length; j++) {
                //如果存在座位添加座位
                if (_json[i].seats[j].isExist)
                    htmlstr += '<td><div class="seat"><em class="seat-b"></em></div></td>';
                    //不存在座位添加空格
                else
                    htmlstr += '<td></td>';
            }
            htmlstr += '</tr>';
        }
        return htmlstr;
    },
    /**
     * 添加已经被占座的座位和座位序号
     * @param {} objArr 座位数组
     * @param {} holdedSeatArr 已占座数组
     */
    AddHoldedAndNumber: function (objArr, holdedSeatArr) {
        //debugger;
        objArr.each(function (index) {
            $(this).html('' + (index + 1) + '<em class="seat-b"></em>');
        });
        //debugger;
        for (var i = 0; i < holdedSeatArr.length; i++) {
            objArr.eq(holdedSeatArr[i] - 1).addClass("holded");
        }
        holdSeat.CanSelectSeatBindFun(objArr);
    },
    /**
     * 添加已经被占座的座位和座位序号
     * @param {} objArr 座位数组
     * @param {} holdedSeatArr 已占座数组
     */
    AddFullAndNumber: function (objArr, count) {
        //debugger;
        objArr.each(function (index) {
            $(this).html('' + (index + 1) + '<em class="seat-b"></em>');
        });
        //debugger;
        for (var i = 0; i < count; i++) {
            objArr.eq(i).addClass("full");
        }
        holdSeat.CanSelectSeatBindFun(objArr);
    },
    /**
     * 为可选座位添加绑定事件方法
     * @param {} objArr 座位数组
     */
    CanSelectSeatBindFun: function (objArr) {
        //debugger;
        objArr.each(function () {
            if (!$(this).hasClass("holded") || !$(this).hasClass("full")) {
                $(this).on("click", function () {
                    $(this).toggleClass("select");
                })
            }
        })
    },
    /**
     * 返回已经选择的座位序号 从1开始
     */
    HasSelectedSeat: function () {
        selectedArr = "";
        var seatArr = $("#takeYourSeat").find(".seat");
        for (var i = 0; i < seatArr.length; i++) {
            if (seatArr.eq(i).hasClass("select")) {
                selectedArr += (i + 1) + ",";
            }
        }
        return selectedArr.substring(0, selectedArr.length - 1).split(",");
    },
    /**
     * 取消事件
     */
    AbortFun: function () {
        $(".seat.select").each(function () {
            $(this).removeClass("select");
        });
    }
}
