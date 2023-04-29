import type { FC, ReactElement, ReactNode } from 'react';

type PropsChildren =
  | ReactNode[]
  | ReactNode
  | ((...params: any[]) => ReactNode);

type SlotProps<Children extends PropsChildren = ReactNode> = {
  children: Children;
}

export type SlotComponent<Children extends PropsChildren = ReactNode> = FC<
  SlotProps<Children>
>;

/**
 * Slot用のコンポーネント
 */
export const createSlotComponent = function <
  Children extends PropsChildren = ReactNode
>(): SlotComponent<Children> {
  return () => null;
};

/**
 * slotコンポーネントにあるChildrenを取得する
 * @param children - Reactの子要素リスト
 * @param slot - 取得するslotコンポーネント
 */

export const getSlot = function<Children extends PropsChildren>(
  children: ReactElement[] | ReactElement | undefined,
  slot: SlotComponent<Children>
): Children | undefined {
  if (Array.isArray(children)) {
    const child = children.find((child) => child.type === slot);
    return child ? (child.props.children as Children) : undefined;
  }
  if (children?.type === slot) {
    return children.props.children as Children;
  }
  return undefined;
}
