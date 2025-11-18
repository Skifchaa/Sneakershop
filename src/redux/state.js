import { rerendrerEntireTree } from "../render";

let state = {
    mensPage: {
        mensData: [
            { id: 1, title: 'New Balance', subtitle: 'Кроссовки New Balance', img: 'https://superstep.ru/upload/resize_cache/iblock/f2d/y82r5rgjbazfz1bm3v2d0dnidw3q96gd/2160_2160_1/NBU9060ERA.webp' },
            { id: 2, title: 'Nike', subtitle: 'Кроссовки Nike', img: 'https://superstep.ru/upload/resize_cache/iblock/11d/skmajh3dxqqmq8wingkjqen7p6xo6fxk/2160_2160_1/NKDV0833111.webp' },
            { id: 3, title: 'Adidas', subtitle: 'Кроссовки Adidas', img: 'https://superstep.ru/upload/resize_cache/iblock/7ef/utdap6y4n10hz7weemw7d9k8ejelupfc/2160_2160_1/ADB75806R00.webp' }
        ]
    },
    newProductsPage: {
        newProductsData: [
            { img: 'https://superstep.ru/upload/resize_cache/iblock/9d3/iq70235n21xg7qja88zfj41ncwibmwhm/2160_2160_1/NKHJ4497400.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/e73/kl7lkrah49y0iolkkqmeztrqnbmda0y8/2160_2160_1/AN8125177194.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/d29/j4w2uddggv3xmjb32v26mqy0f4swya2h/2160_2160_1/NBU1906RCB.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/ec2/41fx71o654q98vfilmt0ks4aech705ce/2160_2160_1/NBU9060AAB.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/9a7/w219j30k5eoyp31303q4u8j8ocfbi5h4/2160_2160_1/NKHQ3818001.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/31d/cqglmf8wdf96n54i1sa2timget976xzz/2160_2160_1/AS1201A789750.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/386/gqlj2kiwr4328ng09uk93oeb1kbioueu/2160_2160_1/PTSTE06642.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/c98/nt6llh0jhf3qa60nqwj046ll6uk1a1ru/2160_2160_1/NBU9060BLK.webp' },
            { img: 'https://superstep.ru/upload/resize_cache/iblock/035/fbyk827z386kq8ohes4au0scdi3ohq5t/2160_2160_1/PM40174404.webp' }

        ],
        commentData: [
            {id: 1, message: 'Суперски', likesCount: '10' },
            {id: 2, message: 'Здоровски', likesCount: '15' },
            {id: 3, message: 'Топчик', likesCount: '20' }

        ]
    },
    accessoriesPage: {
        accessoriesData: [
    {id:1, title:'Anta', subtitle:'Рюкзак Anta BAG', img:'https://superstep.ru/upload/resize_cache/iblock/5c4/bftsrk7cds7kxsodubaspafziqzbxm13/2160_2160_1/AN8925181532.webp'},
    {id:2, title:'Lacoste', subtitle:'Кепка CAP LACOSTE', img:'https://superstep.ru/upload/resize_cache/iblock/1a9/v1hwle7krzlxpe2su1n6ge5a8ev94yl2/2160_2160_1/RK0440166.webp'},
    {id:3, title:'Anta', subtitle:'Шапка Anta CAMPUS Beanie', img:'https://superstep.ru/upload/resize_cache/iblock/810/ut3eesnwnr3f1y692ocfq8hd1m53ug3r/2160_2160_1/AN8924485333.webp'}
]

    }

}

export let addComment = (commentMessage) => {
    debugger;
    let newComment = {
      id:4,
      message: commentMessage,
      likesCount: 0
    };

    state.newProductsPage.commentData.push (newComment) ;
    rerendrerEntireTree (state);
}




export default state;