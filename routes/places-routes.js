const express = require("express");
const HttpError = require("../models/http-error");

const placeRoutes = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://hanok.jeonju.go.kr/uploads/store/2022/01/043095685599bdd9d1740c4fceee4370.jpg",
    title: "전주 한옥마을",
    description: "전주 놀러갔을때 찍은 한옥 한 채",
    address: "전라북도 전주시 완산구 기린대로 99",
    creator: "u1",
    location: {
      lat: 35.8147082,
      lng: 127.1526319,
    },
  },
  {
    id: "p2",
    imageUrl:
      "https://taichung.travel/content/images/attractions/16027/1024x768_Filedata635853420852812608.jpg",
    title: "대만 루체성당",
    description: "타이중에 위치한 루체성당",
    address: "407 대만 Taichung City, Xitun District, 台灣大道四段1727號",
    creator: "u2",
    location: {
      lat: 24.1803006,
      lng: 120.6017675,
    },
  },
  {
    id: "p3",
    imageUrl:
      "https://www.hotelscombined.co.kr/rimg/dimg/74/0d/4a901c8c-city-10161-172d02ff173.jpg?width=1366&height=768&xhint=3940&yhint=1553&crop=true",
    title: "중국 허페이",
    description: "허페이 바오흐어공원에서 한 컷",
    address: "72 Wuhu Rd, Baohe District, Hefei, Anhui, 중국 230002",
    creator: "u3",
    location: {
      lat: 31.8571051,
      lng: 117.2935565,
    },
  },
];

placeRoutes.get("/:placeId", (req, res, next) => {
  const placeId = req.params.placeId;
  const place = DUMMY_PLACES.find((item) => {
    return item.id === placeId;
  });
  if (!place) {
    throw new HttpError("해당 id의 장소를 찾을 수 없습니다.", 404);
  }
  res.json({ place });
});

placeRoutes.get("/user/:userId", (req, res, next) => {
  const userId = req.params.userId;
  const user = DUMMY_PLACES.find((item) => {
    return item.creator === userId;
  });
  if (!user) {
    return next(new HttpError("해당 id의 유저를 찾을 수 없습니다.", 404));
  }
  res.json({ user });
});

module.exports = placeRoutes;
