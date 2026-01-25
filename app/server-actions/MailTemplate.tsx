import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  authorName: string;
  authorEmail: string;
  message: string;
}

export const MailTemplate = ({
  authorName,
  authorEmail,
  message,
}: EmailProps) => {
  const previewText = `Read ${authorName}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={name}>@{authorName}</Text>
              <Text style={email}>{authorEmail}</Text>
              <Hr style={hr} />
              <Text style={comment}>{message}</Text>
            </Row>
          </Section>
          <Hr style={hr} />
        </Container>
      </Body>
    </Html>
  );
};

export default MailTemplate;

const main: React.CSSProperties = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: React.CSSProperties = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const name: React.CSSProperties = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  textTransform: "capitalize",
};

const email: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "1.3",
  color: "#415A77",
  textTransform: "lowercase",
  textDecorationLine: "underline",
};

const paragraph: React.CSSProperties = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const comment: React.CSSProperties = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const hr: React.CSSProperties = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
