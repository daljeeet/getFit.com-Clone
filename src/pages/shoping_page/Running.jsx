import React from "react";
import {
  Box,
  Popover,
  Text,
  Portal,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import SportNav from "../../components/SportNav";
import ProductList from "../../components/ProductList";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import axios from "axios";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import SortItems from "../../components/SortItems";
import ScrollButton from "../../components/ScrollBtn";
const Running = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [sort, setSort] = useState("asc");
  useEffect(() => {
    getData();
  }, [page, sort]);
  const getData = async () => {
    setLoader(true);
    try {
      axios
        .get(
          `https://mercury-breezy-cave.glitch.me/running?_limit=40&_page=${page}_sort=original_price&_order=${sort}`
        )
        .then((res) => setData(res.data))
        .then((el) => setLoader(false));
    } catch (err) {
      console.log(err);
    }
  };
  const handlePage = (page) => {
    setPage(page);
  };
  const handleSort = (val) => {
    setSort(val);
  };
  if (loader) {
    return <Loader />;
  }

  return (
    <Box mt='20' >
      <SportNav top="0" />
      <Box mb='20'>
        <ProductList data={data} catagery='running' />
      </Box>
      <Box
        position="fixed"
        left="40%"
        border="2px"
        rounded="xl"
        cursor="pointer"
        bottom="10"
        bg="gray.800"
      >
        <Popover>
          <PopoverTrigger>
            <Text color="white" px="4" rounded="xl">
              Filter
            </Text>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                w="80%"
                h="10"
              >
                <Text fontWeight="semibold">Sort by Price:</Text>
                <SortItems handleSort={handleSort} sort={sort} />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                w="80%"
                h="10"
              >
                <Text fontWeight="semibold">Page:</Text>
                <Pagination page={page} handlePage={handlePage} />
              </Box>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
      <Box>
        <Footer />
      </Box>
      <ScrollButton/>
    </Box>
  );
  }
export default Running;