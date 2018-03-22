import React, { Component } from 'react';
import { Menu, Button, Container, Icon, Input, Divider, Card, Header } from 'semantic-ui-react';

class Static extends Component {

	state = {
		goldSpot: 1334.20,
		silverSpot: 16.57,		
		itemsInCart: 0,
		currentSelection: 'Gold',
		products: [
			{
				name: '2018 American Eagle',
				meta: '1 oz of Gold',
				description: '.9167 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003733_2018-1-oz-american-gold-eagle_360.png'
			},
			{
				name: '2018 American Gold Buffalo',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003799_2018-1-oz-american-gold-buffalo_360.png'
			},
			{
				name: '2018 Austrian Gold Philharmonic',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003737_2018-1-oz-austrian-gold-philharmonic_360.jpeg'
			},
			{
				name: '2018 Great Britain Gold Brittania',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003749_2018-1-oz-great-britain-gold-britannia_360.png'
			},
			{
				name: '2018 American Eagle',
				meta: '1 oz of Gold',
				description: '.9167 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003733_2018-1-oz-american-gold-eagle_360.png'
			},
			{
				name: '2018 American Gold Buffalo',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003799_2018-1-oz-american-gold-buffalo_360.png'
			},
			{
				name: '2018 Austrian Gold Philharmonic',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003737_2018-1-oz-austrian-gold-philharmonic_360.jpeg'
			},
			{
				name: '2018 Great Britain Gold Brittania',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003749_2018-1-oz-great-britain-gold-britannia_360.png'
			}
		] 
	}

	render() {
		const { goldSpot, silverSpot, itemsInCart, currentSelection, products } = this.state;
		return(
			<div>
				<InfoHeader	/>
	    	<Container>
	    		<MetalSelector />
	    	</Container>
				<Divider />
				<Container>
					<CardList 
						products={products}
					/>    		
					<GoldCardList />
					<SilverCardList />				
				</Container>
			</div>		
		);
	}
}

const InfoHeader = () => {
	return(
		<Menu size='huge' inverted borderless>
      <Menu.Item>
        <SpotPrice />
      </Menu.Item>
      <Menu.Item>
      	<SpotChange />
      </Menu.Item>
      <Menu.Item position='right' icon='shopping cart'>        
      </Menu.Item>
      <Menu.Item>
      	<ItemsInCart />
      </Menu.Item>
    </Menu>
	);
}

const SpotPrice = () => {
	return (		
    <p>Spot Price: Price</p>    
	);
}

const SpotChange = () => {
	return (
		<p>Change: Percentage</p>
	);
}

const ItemsInCart = () => {
	return (
		<p>0</p>
	);
}

const MetalSelector = () => {
	return(
		<Container>
			<Button.Group>
				<Button color='yellow'>Buy Gold</Button>
				<Button color='grey'>Buy Silver</Button>				  
			</Button.Group>
		</Container>
	);
}

const CardList = (props) => {
  return (
    <Card.Group itemsPerRow={4}>
      {
        props.products.map((product, index) => (
          <MetalCard
            key={index}
            image={product.image}
            name={product.name}
            meta={product.meta}            
            description={product.description}
          />
        ))
      }
    </Card.Group>
  );
}

const MetalCard = (props) => {
	return (
		<Card 
			image={props.image}
			header={props.name}
			meta={props.meta}
			description={props.description}
			extra={
				<div>
      		<h2>$1,394.64</h2>
        	<Input 
        		fluid 
        		action={{color: 'green', content: 'Add to Cart'}} 
        		placeholder='0' 
        	/>          	
      	</div>
			}
		/>
	);
}

const GoldCardList = () => {
	return (
		<Card.Group itemsPerRow={4}>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003733_2018-1-oz-american-gold-eagle_360.png'
            header='2018 American Eagle'
            meta='1 oz of Gold'
            description='.9167 FINE GOLD'            
            extra={
	          	<div>
	          		<h2>$1,394.64</h2>
		          	<Input 
		          		fluid 
		          		action={{color: 'green', content: 'Add to Cart'}} 
		          		placeholder='0' 
		          	/>          	
	          	</div>
	          }
					/>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003799_2018-1-oz-american-gold-buffalo_360.png'
	          header='2018 American Gold Buffalo'
	          meta='1 oz of Gold'
	          description='.9999 FINE GOLD'
	          extra={
	          	<div>
	          		<h2>$1,394.75</h2>
		          	<Input 
		          		fluid 
		          		action={{color: 'green', content: 'Add to Cart'}} 
		          		placeholder='0' 
		          	/>          	
	          	</div>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003737_2018-1-oz-austrian-gold-philharmonic_360.jpeg'
	          header='2018 Austrian Gold Philharmonic'
	          meta='1 oz of Gold'
	          description='.9999 FINE GOLD' 
	          extra={
	          	<div>
	          		<h2>$1,392.81</h2>
		          	<Input 
		          		fluid 
		          		action={{color: 'green', content: 'Add to Cart'}} 
		          		placeholder='0' 
		          	/>          	
	          	</div>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003749_2018-1-oz-great-britain-gold-britannia_360.png'
	          header='2018 Great Britain Gold Brittania'
	          meta='1 oz of Gold'
	          description='.9999 FINE GOLD' 
	          extra={
	          	<div>
	          		<h2>$1,383.02</h2>
		          	<Input 
		          		fluid 
		          		action={{color: 'green', content: 'Add to Cart'}} 
		          		placeholder='0' 
		          	/>          	
	          	</div>
	          }
					/>
				</Card.Group>
	);
}

const SilverCardList = () => {
	return (
		<Card.Group itemsPerRow={4}>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003791_2018-1-oz-american-silver-eagle_360.png'
            header='1 oz 2018 American Eagle'
            meta='1 oz of Silver'
            description='.999 FINE SILVER' 
            extra={
	          	<div>
	          		<h2>$19.79</h2>
		          	<Input 
		          		fluid 
		          		action={{color: 'green', content: 'Add to Cart'}} 
		          		placeholder='0' 
		          	/>          	
	          	</div>
	          }
					/>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003731_2018-1-oz-canadian-silver-maple-leaf_360.png'
	          header='1 oz 2018 Canadian Maple Leaf'
	          meta='1 oz of Silver'
	          description='.9999 FINE SILVER' 
	          extra={
	          	<div>
	          		<h2>$19.79</h2>
		          	<Input 
		          		fluid 
		          		action={{color: 'green', content: 'Add to Cart'}} 
		          		placeholder='0' 
		          	/>          	
	          	</div>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003740_2018-1-oz-austrian-silver-philharmonic_360.jpeg'
	          header='1 oz 2018 Austrian Silver Philharmonic'
	          meta='1 oz of Silver'
	          description='.999 FINE SILVER' 
	          extra={
	          	<div>
	          		<h2>$19.79</h2>
		          	<Input 
		          		fluid 
		          		action={{color: 'green', content: 'Add to Cart'}} 
		          		placeholder='0' 
		          	/>          	
	          	</div>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0001043_morgan_silver_dollar_brilliant_uncirculated_360.png'
	          header='Morgan Silver Dollar 1878-1894'
	          meta='.7735 oz of Silver'
	          description='90% silver 10% copper' 
	          extra={
	          	<div>
	          		<h2>Call for Availability</h2>
		          	<Input
		          		fluid		          		
		          		action={{color: 'green', content: 'Add to Cart'}}		          		
		          		type='number' 
		          		placeholder='0'
		          		
		          	/>          	
	          	</div>
	          }
					/>
		</Card.Group>
	);
}



export default Static; 

