import { React, useState, useEffect, useCallback } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { IoIosCheckmark } from "react-icons/io";
import { PiShuffleAngular } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FaShoppingCart } from 'react-icons/fa';
import polo from './Shopitemsimage/Polo-Shirt.webp';
import battery from './Shopitemsimage/Battery.webp';
import Applebattery from './Shopitemsimage/Applebattery.webp';
import batteryiphone from './Shopitemsimage/BatteryiPhone.webp';
import coffee from './Shopitemsimage/Coffee.webp';
import tight from './Shopitemsimage/Tights.webp';
import sweatshirt from './Shopitemsimage/Sweatshirt.webp';
import babyshirt from './Shopitemsimage/Babyshirt.webp';
import crane from './Shopitemsimage/Crane.webp';
import Coffeecup from './Shopitemsimage/Coffeecup.webp';
import stereo from './Shopitemsimage/Stereo.webp';
import nes from './Shopitemsimage/Nes.webp';
import swandling from './Shopitemsimage/babyswaddling.webp';
import kneepad from './Shopitemsimage/Kneepad.webp';
import yoga from './Shopitemsimage/Yogasocks.webp';
import silicone from './Shopitemsimage/Silicone.webp';

const items = [
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: battery,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 5,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: Applebattery,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img:batteryiphone,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 5,
    img: coffee,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 6,
    img: tight,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 7,
    img: sweatshirt,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 8,
    img: babyshirt,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 9,
    img: crane,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 10,
    img: Coffeecup,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 11,
    img: stereo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 12,
    img: nes,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 13,
    img: swandling,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 14,
    img: kneepad,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 15,
    img: yoga,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 16,
    img: silicone,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 1,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 2,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 0,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 3,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
  {
    id: 4,
    img: polo,
    percent: "60%",
    title: "(100% Polyester ) New",
    rating: 3,
    stock: "In stock",
    price: "€ 7,29 – € 8,14",
    icons: [<PiShuffleAngular />, <IoSearchOutline />, <GoHeart />],
  },
];

const ShopHero = () => {
  const [range, setRange] = useState([0, 18940]);
  const [hoveredId, setHoveredId] = useState(null);
  const [hover, setHover] = useState(null)
  const [displayedItems, setDisplayedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;

  const handleSliderChange = (value) => {
    setRange(value);
  };

  const loadMoreItems = useCallback(() => {
    if (loading || page * itemsPerPage >= items.length) return;
    setLoading(true);
    setTimeout(() => {
      const newItems = items.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
      setDisplayedItems((prev) => [...prev, ...newItems]);
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 1000);
  }, [loading, page]);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreItems]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} color="gold" />);
      } else {
        stars.push(<FaRegStar key={i} color="lightgray" />);
      }
    }
    return stars;
  };

  return (
    <div className='flex'>
      <div className='hidden md:flex bg-[#ffffff] justify-center shadow-[inset_-12px_-8px_40px_#46464620] w-[25%] h-[100vh] mx-[30px] rounded-lg'>
        <div className='p-[20px] flex flex-col gap-[25px] '>
          <h2>Filter By Price</h2>
          <Slider
            range
            min={0}
            max={18940}
            defaultValue={[0, 18940]}
            value={range}
            onChange={handleSliderChange}
            trackStyle={[{ backgroundColor: '#FF7700', height: 2 }]}
            handleStyle={[
              {
                width: 3,
                height: 14,
                borderRadius: 0,
                backgroundColor: '#FFFFFF',
                border: '2px solid #FF7700',
              },
              {
                width: 3,
                height: 14,
                borderRadius: 0,
                backgroundColor: '#FFFFFF',
                border: '2px solid #FF7700',
              },
            ]}
          />
          <div className='flex flex-wrap gap-[30px] items-center'>
            <span>Price: € {range[0].toLocaleString()} — € {range[1].toLocaleString()}</span>
            <button style={{ backgroundColor: '#FF7700', color: '#FFFFFF', padding: '5px', border: 'none', borderRadius: '5px' }}>
              Filter
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className='hidden md:flex justify-between items-center pt-[40px] ml-[30px] mr-[30px]'>
          <h1 className='font-bold text-[27px]'>shop</h1>
          <div className='flex items-center gap-[20px]'>
            <div className='tracking-[5px]'>
              <span className='tracking-[0px] font-semibold text-[17px]'>Show : </span>9/12/18/24
            </div>
            <div className='flex items-center gap-[7px]'>
              <AiOutlineMenu />
              <CgMenuGridO className='text-[23px]' />
              <TfiLayoutGrid4Alt />
            </div>
            <select className='border-[1px] bg-[#ffffff] shadow-[inset_-12px_-8px_40px_#46464620] rounded-md h-[40px] outline-none'>
              <option value="Default sorting">Default sorting</option>
              <option value="">Sort by popularity</option>
              <option value="">Sort by average rating</option>
              <option value="">Sort by latest</option>
              <option value="">Sort by price: low to high</option>
              <option value="">Sort by price: high to low</option>
            </select>
          </div>
        </div>

        <div className='m-[10px] md:m-[40px] grid grid-cols-2 md:grid-cols-4 gap-[20px] justify-center'>
          {items.map((item) => (
            <div key={item.id} onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)} className="relative">
              <div className='flex flex-col gap-[8px] rounded-xl p-[10px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] relative overflow-hidden cursor-pointer md:hover:scale-[1.01] md:hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
                <div>
                  <img src={item.img} alt={item.title} className='md:h-[200px] md:w-[260px] h-[180px] rounded-xl' />
                  <p className='bg-[#FF7700] rounded-full text-center flex items-start justify-center relative bottom-[180px] md:bottom-[183px] md:left-[15px] w-[55px] p-[1px]'>{item.percent}</p>
                </div>
                <p>{item.title}</p>
                <p className='flex gap-[5px]'>{renderStars(item.rating)}</p>
                <p className='flex items-center font-semibold'><IoIosCheckmark className='text-[#FF7700] text-[35px]' />{item.stock}</p>
                <p className='text-[#FF7700] font-semibold'>{item.price}</p>
                <div key={item.id} onMouseEnter={() => setHover(item.id)} onMouseLeave={() => setHover(null)}  className='flex items-center justify-center'>
                  <button
                    className="relative flex items-center justify-center p-[20px] text-white text-center md:w-[15vw] w-[40vw] bg-[#FF7700] rounded-lg hover:bg-[#FF7700] transition-colors duration-300">
                    <span className={`absolute transition-transform duration-300 ${hover === item.id ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}> Add To Cart </span>
                    <FaShoppingCart className={`absolute transition-transform duration-300 ${hover === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} size={24} />
                  </button>
                </div>

                {hoveredId === item.id && item.icons && (
                <div className={`hidden md:flex absolute right-[10px] top-[5%] transform transition-all duration-500 ease-in-out
                    ${hoveredId === item.id ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
                    bg-white p-4 rounded-lg shadow-lg`}
                  style={{ marginRight: '10px' }}
                >
                  <div className="flex flex-col space-y-4">
                    {item.icons.map((icon, index) => (
                      <div key={index} className="w-[25px] h-[30px]  flex items-center justify-center text-[40px]">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              )}


               </div>
            </div>
          ))}
        </div>

        {loading && (
          <button style={buttonStyle} disabled>
            Loading...
          </button>
        )}
        {!loading && displayedItems.length < items.length && (
          <button style={buttonStyle} onClick={loadMoreItems}>
            waiting...
          </button>
        )}
      </div>
    </div>
  );
};

const buttonStyle = {
  display: 'block',
  margin: '20px auto',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default ShopHero;
