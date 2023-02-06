import styled from 'styled-components';

import { ButtonLink, Container, H2, H3, Item, Paragraph, Section } from '../components';
import ConfigureWidgetButton from '../components/ConfigureWidget/ConfigureWidgetButton';
import ConfigureWidgetFrame from '../components/ConfigureWidget/ConfigureWidgetFrame';
import { breakpoints } from '../helpers';

const StyledItem = styled.div`
  background: #000;
  padding: 3rem 1.5rem;

  ${ButtonLink} {
    background-image: linear-gradient(to bottom right, #ffd500 50%, #fff 0);
  }

  ${breakpoints.desktop} {
    padding: 5rem 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 3rem;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

export const AddWidget = () => (
  <ConfigureWidgetFrame>
    <Section background="primary" id="add-widget">
      <H2 color="light" margin="0 0 3rem" textAlign="center">
        Add widget
      </H2>
      <StyledParagraph color="light" margin="0 0 6rem" size={2} textAlign="center" weight={300}>
        Please select your platform to quickly add widget to your site
      </StyledParagraph>
      <Container>
        <Item flexGrow={1}>
          <StyledItem>
            <H3 color="light">BigCommerce</H3>
            <Paragraph color="light" margin="0 0 3rem">
              You will be redirected to BigСommerce app store with all detailed information.
            </Paragraph>
            <ButtonLink
              href="https://www.bigcommerce.com/apps/stand-with-ukraine/"
              rel="noreferrer"
              target="_blank"
              variant="light"
            >
              Select
            </ButtonLink>
          </StyledItem>
        </Item>
        <Item flexGrow={1}>
          <StyledItem>
            <H3 color="light">Other platform</H3>
            <Paragraph color="light" margin="0 0 3rem">
              You will design your custom widget right here. It will take 2 minutes. Let's do it
              now!
            </Paragraph>
            <ConfigureWidgetButton />
          </StyledItem>
        </Item>
      </Container>
    </Section>
  </ConfigureWidgetFrame>
);
