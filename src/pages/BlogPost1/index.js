import React from "react";

import { useNavigate } from "react-router-dom";
import { getTasks } from "service/api";
import {
  Column,
  Row,
  Text,
  Line,
  Image,
  Stack,
  Button,
  List,
} from "components";

const BlogPost1Page = () => {
  const [apiData1, setapiData1] = React.useState();
  React.useEffect(() => {
    callApi1();
  }, []);
  const navigate = useNavigate();

  function callApi1() {
    const req = {};
    getTasks(req)
      .then((res) => {
        setapiData1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate2() {
    navigate("/contactus");
  }

  return (
    <>
      <Column className="bg-white_A700 font-nunitosans items-start justify-end mx-[auto] lg:pt-[28px] xl:pt-[32px] pt-[37px] 3xl:pt-[44px] w-[100%]">
        <header className="lg:ml-[128px] xl:ml-[146px] ml-[165px] 3xl:ml-[198px] w-[77%]">
          <Row className="items-start justify-start w-[100%]">
            <Text className="font-black lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-indigo_900 w-[auto]">{`LAOS.`}</Text>
            <Column className="font-publicsans items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[218px] xl:ml-[249px] ml-[281px] 3xl:ml-[337px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[36%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="cursor-pointer hover:font-bold font-bold lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-deep_purple_A200 tracking-ls1 w-[auto]">{`Home`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`Podcast`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`Blog`}</Text>
                  <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]">{`About`}</Text>
                  <Text
                    className="common-pointer cursor-pointer hover:font-bold font-bold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_600 text-center hover:text-deep_purple_A200 tracking-ls1 w-[auto]"
                    onClick={handleNavigate2}
                  >{`Contact`}</Text>
                </Row>
              </Column>
              <Line className="bg-deep_purple_A200 h-[1px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[13%]" />
            </Column>
            <Image
              src={"images/img_search21_1.svg"}
              className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] mt-[1px] object-contain lg:w-[23px] xl:w-[26px] w-[30px] 3xl:w-[36px]"
              alt="search21"
            />
          </Row>
        </header>
        <Stack className="bg-indigo_900 font-publicsans lg:h-[533px] xl:h-[610px] h-[685px] 2xl:h-[686px] 3xl:h-[823px] lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] w-[100%]">
          <Image
            src={"images/img_maskgroup.svg"}
            className="absolute lg:h-[409px] xl:h-[468px] h-[525px] 2xl:h-[526px] 3xl:h-[631px] object-cover top-[0] w-[100%]"
            alt="MaskGroup"
          />
          <Row className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[9%] w-[77%]">
            <Column className="items-start w-[57%]">
              <Button className="bg-white_A700_3f font-light font-publicsans xl:py-[5px] lg:py-[5px] py-[6.54px] 2xl:py-[6px] 3xl:py-[7px] rounded-radius5 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[13%]">{`Writer`}</Button>
              <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-left text-white_A700 tracking-ls1 w-[100%]">{`Eps 3 : How to write a book properly and correctly by paying attention to various parts to support the story`}</Text>
              <Row className="font-publicsans items-center justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[37%]">
                <Stack className="lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] lg:w-[46px] xl:w-[53px] w-[60px] 3xl:w-[72px]">
                  <Image
                    src={"images/img_ellipse5.png"}
                    className="absolute lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] inset-[0] object-cover rounded-radius50 w-[auto]"
                    alt="Ellipse5"
                  />
                  <div className="absolute bg-pink_300 lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] right-[0] rounded-radius50 top-[12%] lg:w-[10px] xl:w-[12px] w-[14px] 3xl:w-[16px]"></div>
                </Stack>
                <Column className="items-start lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[68%]">
                  <Column className="w-[100%]">
                    <Text className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 tracking-ls1 w-[auto]">{`By Jhone Leonardo`}</Text>
                  </Column>
                  <Text className="font-light ml-[1px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[auto]">{`Podcaster & Blogger`}</Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-white_A700_3f items-start xl:ml-[111px] ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:my-[16px] xl:my-[18px] my-[21px] 3xl:my-[25px] lg:py-[33px] xl:py-[38px] py-[43px] 3xl:py-[51px] rounded-radius5 w-[31%]">
              <Text className="font-semibold leading-[normal] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-left text-white_A700 tracking-ls1 w-[81%]">{`Find and make it easy for yourself in listening to our podcasts on`}</Text>
              <Column className="items-center lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] lg:pl-[25px] xl:pl-[29px] pl-[33px] 3xl:pl-[39px] lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] w-[100%]">
                <Image
                  src={"images/img_listpodcast.svg"}
                  className="lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] mx-[auto] object-contain w-[81%]"
                  alt="listpodcast"
                />
              </Column>
            </Column>
          </Row>
          <Row className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-center justify-center mx-[auto] lg:pb-[17px] xl:pb-[19px] pb-[22px] 3xl:pb-[26px] lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[25px] xl:pr-[29px] pr-[33px] 3xl:pr-[39px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] rounded-radius5 shadow-bs1 w-[64%]">
            <Image
              src={"images/img_rectangle39.png"}
              className="lg:h-[168px] xl:h-[192px] h-[215px] 2xl:h-[216px] 3xl:h-[259px] object-contain rounded-radius5 w-[23%]"
              alt="Rectangle39"
            />
            <Column className="lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] w-[70%]">
              <Column className="font-publicsans w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Button className="bg-indigo_900_26 font-light xl:pb-[4px] pb-[5.38px] 2xl:pb-[5px] 3xl:pb-[6px] xl:pt-[5px] pt-[6.38px] 2xl:pt-[6px] 3xl:pt-[7px] lg:py-[4px] rounded-radius5 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-indigo_900 w-[12%]">{`Writer`}</Button>
                  <Text className="font-light lg:ml-[359px] xl:ml-[410px] ml-[462px] 3xl:ml-[554px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-left w-[auto]">{`25 August, 2020`}</Text>
                </Row>
              </Column>
              <Text className="font-bold font-merriweather italic leading-[normal] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900 text-left tracking-ls1 w-[100%]">{`Eps 3 : How to write a book properly and correctly by paying attention to various parts to support the story`}</Text>
              <Text className="font-light font-publicsans lg:leading-[19px] xl:leading-[22px] leading-[25.00px] 2xl:leading-[25px] 3xl:leading-[30px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[100%]">{`Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a sabot...`}</Text>
              <Column className="font-publicsans xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                <Row className="items-center justify-start lg:pr-[262px] xl:pr-[300px] pr-[338px] 3xl:pr-[405px] w-[100%]">
                  <Text className="bg-deep_purple_A200 font-light leading-[normal] lg:pb-[11px] xl:pb-[13px] pb-[15px] 3xl:pb-[18px] lg:pl-[17px] xl:pl-[19px] pl-[22px] 3xl:pl-[26px] lg:pt-[10px] xl:pt-[12px] pt-[14px] 3xl:pt-[16px] rounded-radius5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[26%]">{`Continue Reading`}</Text>
                  <Text className="font-light lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:ml-[17px] xl:ml-[19px] ml-[22px] 3xl:ml-[26px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] opacity-op5 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-indigo_900 text-left w-[auto]">{`Go to Spotify Now`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Column className="font-mulish items-start 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] mt-[84px] lg:pl-[118px] xl:pl-[135px] pl-[152px] 3xl:pl-[182px] lg:pr-[615px] xl:pr-[703px] pr-[791px] 3xl:pr-[949px] w-[100%]">
          <Text className="font-extrabold lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-black_900 text-left w-[auto]">{`Blog posts`}</Text>
          <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_500 text-left w-[auto]">{`Our latest updates and blogs about managing your team`}</Text>
        </Column>
        <Column className="items-end lg:mt-[50px] xl:mt-[57px] mt-[65px] 3xl:mt-[78px] lg:pl-[115px] xl:pl-[131px] pl-[148px] 3xl:pl-[177px] lg:pr-[63px] xl:pr-[72px] pr-[82px] 3xl:pr-[98px] w-[100%]">
          <List className="gap-[0] min-h-[auto] w-[84%]" orientation="vertical">
            <Row className="items-start justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[17px] xl:mb-[19px] mb-[22px] 3xl:mb-[26px] w-[32%]">
                <Column className="w-[100%]">
                  <Stack className="lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] w-[100%]">
                    <Image
                      src={"images/img_rectangle.png"}
                      className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] inset-[0] object-cover w-[100%]"
                      alt="Rectangle"
                    />
                  </Stack>
                </Column>
                <Text className="font-cabin font-medium leading-[normal] lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 text-left w-[89%]">
                  {apiData1?.tasks?.title}
                </Text>
                <Text className="font-mulish font-semibold leading-[normal] lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[86%]">
                  {apiData1?.tasks?.description}
                </Text>
                <Column className="font-mulish lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] w-[100%]">
                  <Row className="items-center justify-start lg:pl-[24px] xl:pl-[27px] pl-[31px] 3xl:pl-[37px] lg:pr-[49px] xl:pr-[56px] pr-[63px] 3xl:pr-[75px] w-[100%]">
                    <Column className="rounded-radius30 w-[12%]">
                      <Image
                        src={"images/img_ellipse.png"}
                        className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-cover rounded-radius50 w-[100%]"
                        alt="Ellipse"
                      />
                    </Column>
                    <Text className="font-semibold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:my-[10px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Wade Warren`}</Text>
                    <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`I`}</Text>
                    <Text className="font-semibold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:my-[10px] xl:my-[11px] my-[13px] 3xl:my-[15px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">
                      {apiData1?.tasks?.due_date}
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Stack className="lg:h-[322px] xl:h-[368px] h-[413px] 2xl:h-[414px] 3xl:h-[496px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] w-[32%]">
                <Column className="absolute bg-white_A700 inset-y-[0] items-start justify-center left-[2%] lg:pb-[17px] xl:pb-[19px] pb-[22px] 3xl:pb-[26px] lg:pt-[122px] xl:pt-[140px] pt-[158px] 3xl:pt-[189px] right-[0] rounded-radius30 w-[98%]">
                  <Text className="font-cabin font-medium leading-[normal] lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 text-left w-[90%]">{`10 secret tips for managing a team remotely`}</Text>
                  <Text className="font-mulish font-semibold leading-[normal] lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[88%]">
                    {
                      <>
                        {`Our latest updates and blogs about managing your team`}
                        <br />
                        {`Our latest updates and blogs about managing your team`}
                      </>
                    }
                  </Text>
                  <Column className="font-mulish lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] w-[100%]">
                    <Row className="items-center justify-evenly lg:px-[20px] xl:px-[23px] px-[26px] 3xl:px-[31px] w-[100%]">
                      <Column className="rounded-radius30 w-[12%]">
                        <Image
                          src={"images/img_ellipse_1.png"}
                          className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-cover rounded-radius50 w-[100%]"
                          alt="Ellipse"
                        />
                      </Column>
                      <Stack className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[16px] xl:ml-[18px] ml-[21px] 3xl:ml-[25px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[68%]">
                        <Text className="absolute font-semibold left-[40%] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`I`}</Text>
                        <Stack className="absolute lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] top-[0] w-[100%]">
                          <Text className="absolute bottom-[0] font-semibold left-[0] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Bessie Cooper`}</Text>
                          <Text className="absolute font-semibold right-[0] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`2nd January,2022`}</Text>
                        </Stack>
                      </Stack>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] top-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle_1.png"}
                    className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[322px] xl:h-[368px] h-[413px] 2xl:h-[414px] 3xl:h-[496px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] w-[32%]">
                <Column className="absolute bg-white_A700 inset-y-[0] items-start justify-end left-[2%] lg:pb-[17px] xl:pb-[19px] pb-[22px] 3xl:pb-[26px] lg:pt-[122px] xl:pt-[140px] pt-[158px] 3xl:pt-[189px] right-[0] rounded-radius30 w-[98%]">
                  <Text className="font-cabin font-medium leading-[normal] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 text-left w-[91%]">{`What Ever Happened to Steampunk?`}</Text>
                  <Text className="font-mulish font-semibold leading-[normal] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[88%]">{`How the iPhone popularized steampunk… and how the iPhone killed it off`}</Text>
                  <Column className="font-mulish items-center lg:mt-[59px] xl:mt-[67px] mt-[76px] 3xl:mt-[91px] lg:pl-[19px] xl:pl-[22px] pl-[25px] 3xl:pl-[30px] lg:pr-[16px] xl:pr-[18px] pr-[21px] 3xl:pr-[25px] w-[100%]">
                    <Stack className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] mx-[auto] w-[88%]">
                      <Row className="absolute items-center justify-between left-[0] w-[54%]">
                        <Column className="rounded-radius30 w-[25%]">
                          <Image
                            src={"images/img_ellipse_2.png"}
                            className="lg:h-[35px] xl:h-[40px] h-[44px] 2xl:h-[45px] 3xl:h-[53px] object-cover rounded-radius50 w-[100%]"
                            alt="Ellipse"
                          />
                        </Column>
                        <Text className="font-semibold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] xl:ml-[113px] ml-[128px] 3xl:ml-[153px] lg:ml-[99px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`I`}</Text>
                      </Row>
                      <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly my-[auto] right-[0] w-[80%]">
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Courtney Henry`}</Text>
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`2nd January,2022`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Stack className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] top-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle_2.png"}
                    className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle"
                  />
                </Stack>
              </Stack>
            </Row>
            <Row className="items-center justify-between lg:my-[21px] xl:my-[24px] my-[28px] 3xl:my-[33px] w-[100%]">
              <Stack className="lg:h-[322px] xl:h-[369px] h-[414px] 2xl:h-[415px] 3xl:h-[498px] w-[33%]">
                <Column className="absolute bg-white_A700 inset-y-[0] items-start justify-end left-[2%] lg:pb-[17px] xl:pb-[20px] pb-[23px] 3xl:pb-[27px] lg:pt-[122px] xl:pt-[140px] pt-[158px] 3xl:pt-[189px] right-[4%] rounded-radius30 w-[94%]">
                  <Text className="font-cabin font-medium leading-[normal] lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 text-left w-[90%]">{`The 2020 Guide for White Men in Tech`}</Text>
                  <Text className="font-mulish font-semibold leading-[normal] lg:ml-[30px] xl:ml-[34px] ml-[39px] 3xl:ml-[46px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[88%]">{`How to use centuries of unfair advantage to make the world a more equal place`}</Text>
                  <Column className="font-mulish items-center lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:pr-[17px] xl:pr-[19px] pr-[22px] 3xl:pr-[26px] w-[100%]">
                    <Stack className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] mx-[auto] w-[87%]">
                      <Row className="absolute items-center justify-between left-[0] w-[52%]">
                        <Column className="rounded-radius30 w-[27%]">
                          <Image
                            src={"images/img_ellipse_3.png"}
                            className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] object-cover rounded-radius50 w-[100%]"
                            alt="Ellipse"
                          />
                        </Column>
                        <Text className="font-semibold xl:ml-[108px] ml-[122px] 3xl:ml-[146px] lg:ml-[94px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`I`}</Text>
                      </Row>
                      <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly my-[auto] right-[0] w-[80%]">
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Darlene Robert`}</Text>
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`2nd January,2022`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Stack className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] inset-x-[0] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] top-[0] w-[96%]">
                  <Image
                    src={"images/img_rectangle_3.png"}
                    className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle"
                  />
                </Stack>
                <Image
                  src={"images/defaultNoData.png"}
                  className="absolute bottom-[17%] 3xl:h-[118px] lg:h-[77px] xl:h-[88px] h-[98px] 2xl:h-[99px] object-contain right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] w-[94%]"
                  alt="Image"
                />
              </Stack>
              <Stack className="lg:h-[322px] xl:h-[369px] h-[414px] 2xl:h-[415px] 3xl:h-[498px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[32%]">
                <Column className="absolute bg-white_A700 inset-y-[0] items-start justify-end left-[2%] lg:pb-[17px] xl:pb-[20px] pb-[23px] 3xl:pb-[27px] lg:pt-[122px] xl:pt-[140px] pt-[158px] 3xl:pt-[189px] right-[0] rounded-radius30 w-[98%]">
                  <Text className="font-cabin font-medium leading-[normal] lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 text-left w-[90%]">{`Why Are Women Still Behind in the Design World?`}</Text>
                  <Text className="font-mulish font-semibold leading-[normal] lg:ml-[28px] xl:ml-[32px] ml-[37px] 3xl:ml-[44px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[88%]">{`It’s 2020, but women designers still face lower pay and less opportunity. What gives?`}</Text>
                  <Column className="font-mulish items-center lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:pr-[21px] xl:pr-[24px] pr-[27px] 3xl:pr-[32px] w-[100%]">
                    <Stack className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] mx-[auto] w-[86%]">
                      <Row className="absolute items-center justify-between left-[0] w-[53%]">
                        <Column className="rounded-radius30 w-[27%]">
                          <Image
                            src={"images/img_ellipse_4.png"}
                            className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] object-cover rounded-radius50 w-[100%]"
                            alt="Ellipse"
                          />
                        </Column>
                        <Text className="font-semibold xl:ml-[109px] ml-[123px] 3xl:ml-[147px] lg:ml-[95px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`I`}</Text>
                      </Row>
                      <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly my-[auto] right-[0] w-[79%]">
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Leslie Alexander`}</Text>
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`2nd January,2022`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Stack className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] top-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle_4.png"}
                    className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle"
                  />
                </Stack>
              </Stack>
              <Stack className="lg:h-[322px] xl:h-[369px] h-[414px] 2xl:h-[415px] 3xl:h-[498px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] w-[32%]">
                <Column className="absolute bg-white_A700 inset-y-[0] items-start justify-center left-[2%] lg:pb-[17px] xl:pb-[20px] pb-[23px] 3xl:pb-[27px] lg:pt-[122px] xl:pt-[140px] pt-[158px] 3xl:pt-[189px] right-[0] rounded-radius30 w-[98%]">
                  <Text className="font-cabin font-medium leading-[normal] lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-bluegray_900 text-left w-[91%]">{`The Ultimate Guide to Becoming a Great Designer`}</Text>
                  <Text className="font-mulish font-semibold leading-[normal] lg:ml-[28px] xl:ml-[32px] ml-[36px] 3xl:ml-[43px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[88%]">
                    {
                      <>
                        {`Our latest updates and blogs about managing your team`}
                        <br />
                        {`Our latest updates and blogs about managing your team`}
                      </>
                    }
                  </Text>
                  <Column className="font-mulish items-center lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] lg:px-[19px] xl:px-[22px] px-[25px] 3xl:px-[30px] w-[100%]">
                    <Stack className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] mx-[auto] w-[87%]">
                      <Row className="absolute items-center justify-between left-[0] w-[53%]">
                        <Column className="rounded-radius30 w-[26%]">
                          <Image
                            src={"images/img_ellipse_6.png"}
                            className="lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] object-cover rounded-radius50 w-[100%]"
                            alt="Ellipse"
                          />
                        </Column>
                        <Text className="font-semibold xl:ml-[110px] ml-[124px] 3xl:ml-[148px] lg:ml-[96px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`I`}</Text>
                      </Row>
                      <Row className="absolute h-[max-content] inset-y-[0] items-center justify-evenly my-[auto] right-[0] w-[79%]">
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`Eleanor Pena`}</Text>
                        <Text className="font-semibold xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_500 text-left w-[auto]">{`2nd January,2022`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                </Column>
                <Stack className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] top-[0] w-[100%]">
                  <Image
                    src={"images/img_rectangle_5.png"}
                    className="absolute lg:h-[109px] xl:h-[124px] h-[139px] 2xl:h-[140px] 3xl:h-[167px] inset-[0] object-cover w-[100%]"
                    alt="Rectangle"
                  />
                </Stack>
              </Stack>
            </Row>
          </List>
        </Column>
        <Row className="font-publicsans items-start justify-start lg:mt-[52px] xl:mt-[60px] mt-[68px] 3xl:mt-[81px] lg:pl-[163px] xl:pl-[186px] pl-[210px] 3xl:pl-[252px] lg:pr-[301px] xl:pr-[344px] pr-[387px] 3xl:pr-[464px] w-[100%]">
          <Image
            src={"images/defaultNoData.png"}
            className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] object-contain rounded-radius30 w-[3%]"
            alt="Avatar"
          />
          <Column className="bg-indigo_900 items-center justify-start lg:ml-[304px] xl:ml-[348px] ml-[392px] 3xl:ml-[470px] 3xl:pb-[10px] lg:pb-[6px] xl:pb-[7px] pb-[8.78px] 2xl:pb-[8px] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] pt-[9.75px] 2xl:pt-[9px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] rounded-radius195 w-[3%]">
            <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`1`}</Text>
          </Column>
          <Column className="bg-white_A700 items-center justify-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] 3xl:pb-[10px] lg:pb-[6px] xl:pb-[7px] pb-[8.78px] 2xl:pb-[8px] lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] pt-[9.75px] 2xl:pt-[9px] rounded-radius195 w-[3%]">
            <Text className="font-normal mx-[auto] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-indigo_900 text-left w-[auto]">{`2`}</Text>
          </Column>
          <Stack className="lg:h-[23px] xl:h-[26px] h-[29px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[6%]">
            <Image
              src={"images/defaultNoData.png"}
              className="absolute lg:h-[23px] xl:h-[26px] h-[29px] 2xl:h-[30px] 3xl:h-[35px] left-[0] object-contain rounded-radius30 w-[52%]"
              alt="Avatar"
            />
            <Row className="absolute h-[max-content] inset-y-[0] items-start justify-between my-[auto] right-[0] w-[83%]">
              <Text className="font-light lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-indigo_900 text-left w-[auto]">{`Next`}</Text>
              <Image
                src={"images/img_arrowpointing.svg"}
                className="lg:h-[13px] xl:h-[14px] h-[15.6px] 2xl:h-[16px] 3xl:h-[19px] mb-[1.94px] 2xl:mb-[1px] xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] mt-[2.93px] 2xl:mt-[2px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] object-contain w-[23%]"
                alt="arrowpointing"
              />
            </Row>
          </Stack>
          <Image
            src={"images/defaultNoData.png"}
            className="lg:h-[24px] xl:h-[27px] h-[30px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[116px] xl:ml-[133px] ml-[150px] 3xl:ml-[180px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] object-contain rounded-radius30 w-[3%]"
            alt="Avatar"
          />
        </Row>
        <footer className="lg:mt-[129px] xl:mt-[148px] mt-[167px] 3xl:mt-[200px] w-[100%]">
          <Column className="bg-indigo_900 items-center justify-end lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pl-[129px] xl:pl-[147px] pl-[166px] 3xl:pl-[199px] lg:pr-[128px] xl:pr-[146px] pr-[165px] 3xl:pr-[198px] lg:pt-[47px] xl:pt-[54px] pt-[61px] 3xl:pt-[73px] w-[100%]">
            <Row className="font-merriweather items-center justify-between mx-[auto] w-[77%]">
              <Column className="items-start w-[15%]">
                <Text className="font-black lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-gray_200 text-left w-[auto]">{`Laos`}</Text>
                <Column className="font-publicsans lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                  <Row className="items-start justify-start w-[100%]">
                    <Image
                      src={"images/img_heart31_1.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="heart31"
                    />
                    <Text className="font-medium ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Build with heart`}</Text>
                  </Row>
                </Column>
              </Column>
              <Row className="font-publicsans items-center justify-center lg:ml-[138px] xl:ml-[158px] ml-[178px] 3xl:ml-[213px] lg:my-[19px] xl:my-[22px] my-[25px] 3xl:my-[30px] w-[43%]">
                <Text className="font-light lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Home`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Podcast`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Blog`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`About`}</Text>
                <Text className="font-light lg:ml-[38px] xl:ml-[44px] ml-[50px] 3xl:ml-[60px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-left text-white_A700 w-[auto]">{`Contact`}</Text>
              </Row>
              <Column className="font-publicsans items-center xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[138px] xl:ml-[158px] ml-[178px] 3xl:ml-[213px] xl:mt-[2px] lg:mt-[2px] mt-[3px] w-[10%]">
                <Text className="font-bold mx-[auto] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 w-[auto]">{`Follow Me on`}</Text>
                <Image
                  src={"images/img_group94_1.svg"}
                  className="lg:h-[20px] xl:h-[23px] h-[25px] 2xl:h-[26px] 3xl:h-[31px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-cover w-[100%]"
                  alt="Group94"
                />
              </Column>
            </Row>
            <Text className="font-light font-publicsans lg:mt-[50px] xl:mt-[57px] mt-[65px] 3xl:mt-[78px] mx-[auto] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-left text-white_A700 w-[auto]">{`Powered by Majengkarya - Premium Theme`}</Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default BlogPost1Page;
