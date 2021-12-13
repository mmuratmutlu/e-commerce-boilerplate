import type { NextPage } from "next";
import styled from "styled-components";
import { useFormik } from "formik";
import { Input, PlainButton } from "components";
const Checkout: NextPage = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      cargo: "",
      country: "",
      firstname: "",
      lastname: "",
      address: "",
      postalcode: "",
      city: "",
      addressDetail: "",
      campaigncode: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <Form>
      <Container>
        <Section
          style={{ alignItems: "flex-end" }}
          width="53.5%"
          color={"#ffffff"}
        >
          <Wrapper width="50%">
            <SubTitleText>İletişim Bilgisi</SubTitleText>
            <Input
              placeholder="Lütfen email adresinizi giriniz."
              type="text"
              name="name"
              onChange={handleChange}
              value={values?.name}
            />
          </Wrapper>
          {/* <Wrapper width="50%">
            <SubTitleText>Contact Information</SubTitleText>
            <Input placeholder="Enter email address" type="text" name="name" />
          </Wrapper> */}
          <Wrapper width="50%">
            <SubTitleText>Kargo Seçimi</SubTitleText>
            <div>
              <Input
                logo="/images/aras-kargo.png"
                type="radio"
                value="aras"
                name="cargo"
                label="Aras Kargo"
                onChange={handleChange}
              />

              <Input
                logo="/images/yurtici.png"
                type="radio"
                value="yurtici"
                name="cargo"
                label="Yurtiçi Kargo"
                onChange={handleChange}
              />
            </div>
          </Wrapper>

          <Wrapper width="50%">
            <SubTitleText>Seçim Ekranı</SubTitleText>
            <Input
              type="select"
              defaultValue="aras"
              name="country"
              label="Ülkeyi seçin"
              onChange={handleChange}
              value={values?.country}
              options={[
                { value: "turkey", label: "Türkiye" },
                { value: "germany", label: "Almanya" },
                { value: "netherlands", label: "Hollanda" },
              ]}
            />
            <InputRow>
              <Input
                placeholder="İsim"
                type="text"
                name="firstname"
                onChange={handleChange}
                value={values?.firstname}
              />

              <Input
                placeholder="Soyisim"
                type="text"
                name="lastname"
                onChange={handleChange}
                value={values?.lastname}
              />
            </InputRow>
            <Input
              placeholder="Adres"
              type="text"
              name="address"
              onChange={handleChange}
              value={values?.address}
            />
            <Input
              placeholder="Adres Detayı (opsiyonel)"
              type="text"
              name="addressDetail"
              onChange={handleChange}
              value={values?.addressDetail}
            />
            <InputRow>
              <Input
                placeholder="Posta Kodu"
                type="text"
                name="postalcode"
                onChange={handleChange}
                value={values?.postalcode}
              />

              <Input
                placeholder="City"
                type="text"
                name="city"
                onChange={handleChange}
                value={values?.city}
              />
            </InputRow>
          </Wrapper>
          <Wrapper width="50%">
            <PlainButton
              onClick={(e: any) => {
                e.preventDefault();
                handleSubmit();
              }}
              style={{ marginTop: "30px", width: "30%" }}
            >
              Ödemeye Devam Et
            </PlainButton>
          </Wrapper>
        </Section>
        <Section
          style={{ border: "none", alignItems: "flex-start" }}
          width="46.5%"
          color={"#fafafa"}
        >
          <Wrapper style={{ gap: "25px !important" }} width="40%">
            <Seperator style={{ gap: "30px" }}></Seperator>

            <InputRow>
              <Input
                placeholder="İndirim Kodu"
                type="text"
                name="campaigncode"
                onChange={handleChange}
                value={values?.campaigncode}
              />
              <div style={{ width: "30%" }}>
                <PlainButton>Uygula</PlainButton>
              </div>
            </InputRow>
            <Seperator></Seperator>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <InfoContainer>
                <text style={{ fontSize: "14px", color: "#323232" }}>
                  Subtotal
                </text>
                <text style={{ fontSize: "14px", color: "#323232" }}>
                  $749.95
                </text>
              </InfoContainer>
              <InfoContainer>
                <text style={{ fontSize: "14px", color: "#323232" }}>
                  Shipping
                </text>
                <text style={{ fontSize: "14px", color: "#323232" }}>
                  Calculated at next step
                </text>
              </InfoContainer>
            </div>
            <Seperator></Seperator>
            <InfoContainer>
              <text style={{ fontSize: "15px", color: "#323232" }}>Total</text>
              <text style={{ fontSize: "18px", color: "#323232" }}>
                $749.95
              </text>
            </InfoContainer>

          </Wrapper>
        </Section>
      </Container>
    </Form>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;
const Section = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  width: ${(param) => param.width};
  min-height: 100vh;
  background: ${(props) => props.color};
  border: 0.1px solid rgb(229, 229, 229, 1);
`;
const Wrapper = styled.div<{ width: string }>`
  display:flex;
  flex-direction: column;
  width: ${(props) => props.width};
  padding 50px 50px 0 50px;
  gap:10px;
`;
const Form = styled.form`
  width: 100%;
`;

const SubTitleText = styled.text`
  margin: 20px 0;
  font-size: 18px;
`;
const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: #e1e1e1;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Checkout;
