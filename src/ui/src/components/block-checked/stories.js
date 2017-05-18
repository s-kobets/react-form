import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { text } from '@kadira/storybook-addon-knobs'
import BlockChecked from './index'

const defaultChecked = {
  title: 'Эконом Базовый',
  price: '12 234 ₽',
  topIcon: ['plane'],
  bottomIcon: ['hand-baggage', 'exchange', 'return'],
  description: '12 лет и старше',
}

storiesOf('BlockChecked', module)
  .addWithInfo('default', () => {
    const title = text('title', defaultChecked.title)
    const price = text('price', defaultChecked.price)
    const description = text('description', defaultChecked.description)

    return (
      <div>
        <BlockChecked
          htmlFor="name1"
          name="radio1"
          title="Банковской картой он-лайн"
          description={description}
          price={price}
          iconsPosition="top"
          icons={defaultChecked.topIcon}
          value="name1"
        />
        <BlockChecked
          htmlFor="name2"
          name="radio1"
          title={title}
          description={'От 2 до 12 лет'}
          price={price}
          iconsPosition="bottom"
          icons={defaultChecked.bottomIcon}
          value="name2"
        />
        <BlockChecked
          htmlFor="name3"
          name="radio1"
          title="Эконом"
          description={'До 2 лет, без места'}
          price={price}
          iconsPosition="bottom"
          icons={defaultChecked.bottomIcon}
          value="name3"
        />
      </div>
    )
  })
