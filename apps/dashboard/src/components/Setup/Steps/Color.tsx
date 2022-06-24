import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { Panel, Radio } from '@bigcommerce/big-design';

import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { configureButtons, setWidgetStyle } from '../../../state/mainSlice';
import { RootState } from '../../../state/store';
import { WIDGET_STYLES } from './common/data';

import type { WidgetStyle } from 'config/types';

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;

  max-width: 400px;
  height: 116px;

  border: 1px solid #d9dce9;
  box-sizing: border-box;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    border-color: #b4bad1;
  }

  & img {
    width: 90%;
  }
`;

const Grid = styled.div`
  grid-template-columns: 1;
  grid-gap: 1rem;
  display: grid;
`;

function SelectWidgetStyle({
  widgetStyle,
  selected,
  image,
}: {
  widgetStyle: WidgetStyle;
  selected: WidgetStyle;
  image: any;
}) {
  const dispatch = useAppDispatch();
  const handleChange = useCallback(
    (_: React.ChangeEvent<HTMLElement>) =>
      dispatch(setWidgetStyle(widgetStyle)),
    [dispatch, widgetStyle]
  );

  return (
    <SelectWrapper onClick={handleChange as any}>
      <Radio
        label=""
        checked={selected === widgetStyle}
        onChange={handleChange}
      />
      {image}
    </SelectWrapper>
  );
}

function selectWidgetStyle(state: RootState): WidgetStyle {
  return state.widgetConfiguration.style;
}

export default function Color() {
  const widgetStyle = useAppSelector(selectWidgetStyle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      configureButtons({
        cancelButton: {
          show: true,
          disabled: false,
        },
        backButton: { show: false, disabled: false },
        continueButton: { show: true, disabled: false },
        publishButton: { show: false, disabled: false },
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel header="Select widget color">
      <Grid>
        {WIDGET_STYLES.map(({ style, image: ImageComponent }, index) => (
          <SelectWidgetStyle
            key={index}
            selected={widgetStyle}
            image={<ImageComponent />}
            widgetStyle={style}
          />
        ))}
      </Grid>
    </Panel>
  );
}