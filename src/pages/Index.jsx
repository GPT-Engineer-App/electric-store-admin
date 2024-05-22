import { useState } from "react";
import { Container, Text, VStack, Button, Input, FormControl, FormLabel, Grid, GridItem, Box, Image, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleAddProduct = () => {
    if (productName && productPrice && productImage) {
      setProducts([...products, { name: productName, price: productPrice, image: productImage }]);
      setProductName("");
      setProductPrice("");
      setProductImage("");
    }
  };

  const handleDeleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          E-Commerce Store for Electric Products
        </Text>

        <Box borderWidth="1px" borderRadius="lg" p={5}>
          <Text fontSize="2xl" mb={4}>
            Admin Dashboard
          </Text>
          <FormControl id="product-name" mb={4}>
            <FormLabel>Product Name</FormLabel>
            <Input value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
          </FormControl>
          <FormControl id="product-price" mb={4}>
            <FormLabel>Product Price</FormLabel>
            <Input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Enter product price" type="number" />
          </FormControl>
          <FormControl id="product-image" mb={4}>
            <FormLabel>Product Image URL</FormLabel>
            <Input value={productImage} onChange={(e) => setProductImage(e.target.value)} placeholder="Enter product image URL" />
          </FormControl>
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Box>

        <Box>
          <Text fontSize="2xl" mb={4}>
            Product List
          </Text>
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
            {products.map((product, index) => (
              <GridItem key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
                <Box p={5}>
                  <Text fontSize="xl" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Text>${product.price}</Text>
                  <IconButton aria-label="Delete product" icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteProduct(index)} />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
