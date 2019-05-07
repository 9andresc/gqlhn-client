declare module '@reach/skip-nav' {
  export type SkipNavProps = {
    children?: React.ReactNode;
  };

  export class SkipNavLink extends React.Component<SkipNavProps> {}
  export class SkipNavContent extends React.Component<SkipNavProps> {}
}
