
import FullScreenSection from "./FullScreenSection";
import React, {useEffect,useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import Calendar from 'react-calendar'; 
import Time from "./Time";


const Reservations = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(true) 

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'birthday',
      comment:'',
      guests:5,
      date:new Date(),
      time:'08:00'
    },
    onSubmit: (values) => {
      submit('https://example.com/contactme',values);
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      type: Yup.string().optional(),
      guests:Yup.number().moreThan(2,"Minimum 2 guest required to book a table").required('Required'),
      comment:Yup.string().min(25,'Must be at least 25 characters').required('Required'),
      date:Yup.string().required('Required'),
      time:Yup.string().required('Required')
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Schedule an Order
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={ formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")} 
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type="guests"
                  {...formik.getFieldProps("guests")} 
                />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <div className="calendar-container">
                  <Calendar onChange={setDate} value={date}/>
                </div>
                <div className="text-center">
                    Selected date: {date.toDateString()}
                </div>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="date">Time</FormLabel>
                  <Time showTime={showTime} date={date}/>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Occasion</FormLabel>
                <Select id="type" name="type">
                  <option value="birthday">Birthday</option>
                  <option value="engagement">
                    Engagement
                  </option>
                  <option value="anniversary">Anniversary</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your Special Notes</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage name="comment">{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Book
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};


export default Reservations;