import React, {useEffect} from "react";
import styled from "styled-components";
import {rem} from "polished";
import {BloodValU} from "../../style/GlobalTitles";
import {PageContainer} from "../../style/GlobalWrappers";
import {ChooseRoleButton} from "../../style/GlobalButtons";
import {connect, useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {setIsDonor} from "../../store/actions/registrationActions";
import {setIsLogin} from "../../store/actions/userActions";
import {device} from "../../style/Functions";

const LandPageContainer = styled(PageContainer)`
  //background-color: lightcoral;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`;

const LogoWrapper = styled.div`
  @media ${device.laptop} { 
  }
`

const ContentWrapper = styled.div`
  //background-color: cadetblue;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(100% - 320px);
  margin-top: ${rem("104px")};
    @media ${device.laptop} { 
      width: auto;
      margin-top: 0;
      padding: ${rem("20px")};
      justify-content: center;
      align-items: center;
  }
`;

const WelcomeText = styled.div`
  font-size: ${rem("16px")};
  @media ${device.laptop} { 
    margin-top: 20px;
    margin-bottom: 20px;
  }
  color: #505565;
  margin-top: ${rem("32px")};
  margin-bottom: ${rem("72px")};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  @media ${device.laptop} { 
      flex-direction: column;
      width: auto;
      align-items: flex-start;
  }
  //background-color: darkorange;
`;
// dispatch(setIsLogin(true))
const LandingPage = ({authReducer: {userObj, authenticated, isLogin}}) => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    useEffect(() => {
        dispatch(setIsLogin(true))
    }, [])

    useEffect(() => {
        if (authenticated) {
            userObj.is_donor ? push("/dashboard/donor") : push("/dashboard/seeker")
        }
    })
    // setIsDonor
    const handleClick = (e) => {
        const value = e.currentTarget.id;
        dispatch(setIsDonor(value));
        push("/auth/signup");
    };

    return (
        <LandPageContainer>
            <ContentWrapper>
                <LogoWrapper><BloodValU text="Welcome to bloodval" black={32} red={48}/></LogoWrapper>
                <WelcomeText>Let’s start creating your profile. Are you interested in</WelcomeText>
                <ButtonWrapper>
                    <ChooseRoleButton onClick={handleClick} id={"True"}>
                        Becoming a donor
                    </ChooseRoleButton>
                    <ChooseRoleButton onClick={handleClick} id={"False"}>
                        Becoming a recipient
                    </ChooseRoleButton>
                </ButtonWrapper>
            </ContentWrapper>
        </LandPageContainer>
    );
};

const mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer,
    };
};

export default connect(mapStateToProps)(LandingPage);
console.log("")
console.log("We hope you liked our presentation. :)")
console.log("")
console.log("")
console.log("Attila Gőz - goz.attila.1977@gmail.com")
console.log("")
console.log("Habib Kadiri - kadirit@hotmail.com")
console.log("")
console.log("Edina Lovász – edina.lovasz@gmail.com")
console.log("")
console.log("António Meireles - edgarmeireles68@gmail.com")
