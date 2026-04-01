import { useEffect } from "react";
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
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { enquiryOptions } from "../constants/content";

type FormField = "firstName" | "email" | "type" | "comment";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "intern",
      comment: "",
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .matches(/^[\p{L}\s'-]+$/u, "Name can only contain letters"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      type: Yup.string()
        .oneOf(
          enquiryOptions.map((o) => o.value),
          "Invalid enquiry type"
        )
        .required("Enquiry type is required"),
      comment: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
  });

  const isFieldInvalid = (field: FormField): string | false | undefined =>
    formik.touched[field] && formik.errors[field];

  useEffect(() => {
    if (response?.type === "success") {
      onOpen(response.type, response.message);
      formik.resetForm();
    } else if (response?.type === "error") {
      onOpen(
        response.type,
        `Oops, ${formik.values.firstName}! ${response.message}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="brand.bg"
      py={16}
      spacing={8}
    >
      <VStack
        w={["100%", "100%", "100%", "1024px"]}
        p={[8, 16, 32]}
        alignItems="flex-start"
      >
        <Heading as="h1" id="contactme-section" color="brand.accent">
          Contact me
        </Heading>
        <Box rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!isFieldInvalid("firstName")}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input id="firstName" {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!isFieldInvalid("email")}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!isFieldInvalid("type")}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  bg="brand.bg"
                  color="white"
                  {...formik.getFieldProps("type")}
                >
                  {enquiryOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      style={{ backgroundColor: "#263238", color: "white" }}
                    >
                      {option.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isInvalid={!!isFieldInvalid("comment")}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                color="brand.bg"
                bg="brand.card"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
