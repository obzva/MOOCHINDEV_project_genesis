const waterBrands = [
  {
    id: 1,
    name: "삼다수",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 1000,
    open_date: "2000-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 2,
    name: "스파클생수",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 800,
    open_date: "2002-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 2,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 3,
    name: "백산수",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 800,
    open_date: "2008-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 4,
    name: "몽베스트생수",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 800,
    open_date: "2001-01-01",
    recent_test_result: false,
    recent_test_date: "2021-01-01",
    total_invalid_count: 4,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 5,
    name: "아이시스",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 600,
    open_date: "2005-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 6,
    name: "동원샘물",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 700,
    open_date: "2005-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 7,
    name: "지리산수",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 700,
    open_date: "2005-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 8,
    name: "다이아몬드생수",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 900,
    open_date: "2010-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 9,
    name: "평창수",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 700,
    open_date: "2002-01-01",
    recent_test_result: false,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 10,
    name: "풀무원샘물",
    image_url: "http://img.danawa.com/prod_img/500000/155/117/img/1117155_1.jpg?shrink=330:330&_v=20210712143816",
    consumer_price: 800,
    open_date: "2010-01-01",
    recent_test_result: true,
    recent_test_date: "2021-01-01",
    total_invalid_count: 1,
    purchase_link_url: "http://coupang.com",
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
];

const waterBrandVersions = [
  {
    id: 1,
    from_date: "2000-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 1,
  },
  {
    id: 2,
    from_date: "2002-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 2,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 2,
  },
  {
    id: 3,
    open_date: "2008-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 3,
  },
  {
    id: 4,
    from_date: "2001-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 4,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 4,
  },
  {
    id: 5,
    from_date: "2005-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 5,
  },
  {
    id: 6,
    open_date: "2005-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 6,
  },
  {
    id: 7,
    from_date: "2005-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 7,
  },
  {
    id: 8,
    from_date: "2010-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 8,
  },
  {
    id: 9,

    from_date: "2002-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 9,
  },
  {
    id: 10,
    from_date: "2010-01-01",
    end_date: "2022-05-11",
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
    water_brand: 10,
  },
];

const waterSources = [
  {
    id: 1,
    location_name: "경상북도 포항시",
    name: "짱짱물",
    recent_test_result: true,
    total_invalid_count: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 2,
    location_name: "광주광역시",
    name: "킹킹물",
    recent_test_result: true,
    total_invalid_count: 5,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 3,
    location_name: "경기도 성남시 분당구 판교동",
    name: "갓갓물",
    recent_test_result: false,
    total_invalid_count: 2,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
];

const waterBrandVersionSourceMappings = [
  {
    id: 1,
    water_brand_version: 1,
    water_source: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 2,
    water_brand_version: 2,
    water_source: 2,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 3,
    water_brand_version: 3,
    water_source: 3,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 4,
    water_brand_version: 4,
    water_source: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 5,
    water_brand_version: 5,
    water_source: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 6,
    water_brand_version: 6,
    water_source: 3,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 7,
    water_brand_version: 7,
    water_source: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 8,
    water_brand_version: 8,
    water_source: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 9,
    water_brand_version: 9,
    water_source: 2,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
  {
    id: 10,
    water_brand_version: 10,
    water_source: 1,
    updated_at: "2022-05-11T06:13:28.922210Z",
    created_at: "2022-05-11T06:13:28.922210Z",
  },
];

export function getWaterBrands() {
  return waterBrands;
}
