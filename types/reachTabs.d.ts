declare module '@reach/tabs' {
  export interface BaseTabProps<A> {
    as?: ComponentType;
    children?: React.ReactNode;
    className?: string;
    rest?: A;
    style?: StyleHTMLAttributes;
  }

  export interface TabsProps<A = React.HTMLAttributes<HTMLDivElement>>
    extends BaseTabProps<A> {
    children: React.ReactNode;
    defaultIndex?: number;
    index?: number;
    onChange?(index: number): void;
  }
  export class Tabs extends React.Component<TabsProps> {}

  export type TabListProps<
    A = React.HTMLAttributes<HTMLDivElement>
  > = BaseTabProps<A>;
  export class TabList extends React.Component<TabListProps> {}

  export type TabPanelsProps<
    A = React.HTMLAttributes<HTMLDivElement>
  > = BaseTabProps<A>;
  export class TabPanels extends React.Component<TabPanelsProps> {}

  export type TabPanelProps<
    A = React.HTMLAttributes<HTMLDivElement>
  > = BaseTabProps<A>;
  export class TabPanel extends React.Component<TabPanelProps> {}

  export interface TabProps<A = React.HTMLAttributes<HTMLDivElement>>
    extends BaseTabProps<A> {
    disabled?: boolean;
  }
  export class Tab extends React.Component<TabProps> {}
}
