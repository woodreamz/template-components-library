import { ReactElement } from 'react';
import {
  RenderHookOptions,
  RenderOptions,
  render as testingRender,
  renderHook as testingRenderHook,
} from '@testing-library/react';

export const AllTheProviders = ({ children }: { children: React.ReactNode }) => children;

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  testingRender(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export const customRenderHook = (hook: (props: any) => any, options?: RenderHookOptions<any>) =>
  testingRenderHook(hook, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render, customRenderHook as renderHook };
