import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

type TabProps = ComponentProps<'li'> & ComponentProps<'div'> & {
    index?: number;
    parentId?: string;
    selected?: boolean;
    href?: string;
    onClick?: () => void;
    onKeyDown?: () => void;
    refCallback?: () => void;
}

const Tab: FC<TabProps> = ({
    children,
    index,
    parentId,
    selected,
    href,
    className,
    refCallback,
    onClick = () => {},
    onKeyDown = () => {},
    ...rest
}) =>
    href ? (
        <li {...rest} className={classNames(className, 'fake-tabs__item', { 'fake-tabs__item--current': selected })}>
            <a href={href} aria-current={selected ? `page` : null}>
                {children}
            </a>
        </li>
    ) : (
        <div
            {...rest}
            ref={refCallback}
            aria-controls={`${parentId || 'default'}-tabpanel-${index}`}
            aria-selected={selected}
            className={classNames(className, 'tabs__item')}
            id={`${parentId || 'default'}-tab-${index}`}
            role="tab"
            tabIndex={selected ? 0 : -1}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            <span>
                {children}
            </span>
        </div>
    )

export default Tab
