import { ReactElement } from 'react';
import {
  RenderHookOptions,
  RenderOptions,
  render as testingRender,
  renderHook as testingRenderHook,
} from '@testing-library/react';
import ThemeProvider from '../lib/theme/ThemeProvider';

export const Providers = ({ children, ...others }: { children: React.ReactNode }) => (
  <ThemeProvider {...others}>{children}</ThemeProvider>
);

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  ProviderProps: any = undefined
) =>
  testingRender(ui, {
    wrapper: (props) => <Providers {...props} {...ProviderProps} />,
    ...options,
  });

export const customRenderHook = (
  hook: (props: any) => any,
  options?: RenderHookOptions<any>,
  ProviderProps: any = undefined
) =>
  testingRenderHook(hook, {
    wrapper: (props) => <Providers {...props} {...ProviderProps} />,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render, customRenderHook as renderHook };
