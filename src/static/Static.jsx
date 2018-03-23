import React, { Component } from 'react';
import { Menu, Button, Container, Input, Divider, Card } from 'semantic-ui-react';

class Static extends Component {

	state = {
		goldSpot: 1334.20,
		silverSpot: 16.57,
		itemsInCart: 0,
		percentageChange: 1.34,
		metalType: 'gold',
		products : [
			{
				metalType: 'gold',
				name: '2018 American Eagle',
				meta: '1 oz of Gold',
				description: '.9167 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003733_2018-1-oz-american-gold-eagle_360.png',
				markup: 1.045
			},
			{
				metalType: 'gold',
				name: '2018 American Gold Buffalo',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003799_2018-1-oz-american-gold-buffalo_360.png',
				markup: 1.056
			},
			{
				metalType: 'gold',
				name: '2018 Austrian Gold Philharmonic',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003737_2018-1-oz-austrian-gold-philharmonic_360.jpeg',
				markup: 1.051
			},
			{
				metalType: 'gold',
				name: '2018 Great Britain Gold Brittania',
				meta: '1 oz of Gold',
				description: '.9999 FINE GOLD',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003749_2018-1-oz-great-britain-gold-britannia_360.png',
				markup: 1.047
			},
			{
				metalType: 'silver',
				name: '2018 American Eagle',
				meta: '1 oz of Silver',
				description: '.999 FINE SILVER',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003791_2018-1-oz-american-silver-eagle_360.png',
				markup: 1.056
			},
			{
				metalType: 'silver',
				name: '2018 Canadian Silver Maple Leaf',
				meta: '1 oz of Silver',
				description: '.9999 FINE SILVER',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003731_2018-1-oz-canadian-silver-maple-leaf_360.png',
				markup: 1.071
			},
			{
				metalType: 'silver',
				name: '2018 Austrian Silver Philharmonic',
				meta: '1 oz of Silver',
				description: '.9999 FINE SILVER',
				image: 'https://www.itmtrading.com/content/images/thumbs/0003740_2018-1-oz-austrian-silver-philharmonic_360.jpeg',
				markup: 1.042
			},
			{
				metalType: 'silver',
				name: 'Morgan Silver Dollar 1878-1894',
				meta: '.7735 oz of Silver',
				description: '90% Silver 10% Copper',
				image: 'https://www.itmtrading.com/content/images/thumbs/0001043_morgan_silver_dollar_brilliant_uncirculated_360.png',
				markup: 1.256
			}
		]
	}

	addToCart = () => {
		// console.log('addToCart');
		this.setState((prevState) => ({
			itemsInCart: prevState.itemsInCart + 1
		}));
	}

	setMetalType = (metalType) => {
		// console.log('metalType', metalType);
		this.setState(() => ({ metalType: metalType }));
	}

	render() {
		const { goldSpot, silverSpot, itemsInCart, silverSelected, percentageChange, products, metalType } = this.state;

		return(
			<div>
				<InfoHeader
					goldSpot = {goldSpot}
					silverSpot = {silverSpot}
					silverSelected = {silverSelected}
					percentageChange = {percentageChange}
					itemsInCart = {itemsInCart}
				/>
	    	<Container>
	    		<MetalSelector
	    			setMetalType={this.setMetalType}
	    		/>
	    	</Container>
				<Divider />
				<Container>
					<CardList
						goldSpot = {goldSpot}
						silverSpot = {silverSpot}
						silverSelected = {silverSelected}
						products={products}
						addToCart={this.addToCart}
						metalType={metalType}
					/>
				</Container>
			</div>
		);
	}
}

const InfoHeader = (props) => {
	return(
		<Menu size='huge' inverted borderless>
      <Menu.Item>
        <SpotPrice
        	goldSpot = {props.goldSpot}
        	silverSpot = {props.silverSpot}
        	silverSelected = {props.silverSelected}
        />
      </Menu.Item>
      <Menu.Item>
      	<SpotChange
      		percentageChange = {props.percentageChange}
      	/>
      </Menu.Item>
      <Menu.Item position='right' icon='shopping cart'>
      </Menu.Item>
      <Menu.Item>
      	<ItemsInCart
      		itemsInCart = {props.itemsInCart}
      	/>
      </Menu.Item>
    </Menu>
	);
}

const SpotPrice = (props) => {
	return (
    <p>{ props.silverSelected ? `SILVER: $${props.silverSpot.toFixed(2)}` : `GOLD: $${props.goldSpot.toFixed(2)}` }</p>
	);
}

const SpotChange = (props) => {
	return (
		<p>{`Change: ${props.percentageChange.toFixed(2)}%`} </p>
	);
}

const ItemsInCart = (props) => {
	return (
		<p>{props.itemsInCart}</p>
	);
}

const MetalSelector = (props) => {
	return(
		<Container>
			<Button.Group>
				<Button
					color='yellow'
					onClick={() => {
						props.setMetalType('gold');
					}}>Buy Gold
				</Button>
				<Button
					color='grey'
					onClick={() => {
						props.setMetalType('silver');
					}}>Buy Silver
				</Button>
			</Button.Group>
		</Container>
	);
}

const CardList = (props) => {
	console.log(props)
	return (
		<Card.Group itemsPerRow={4}>
			{
				props.products
				.filter(product => product.metalType === props.metalType)
				.map((product, index) => (
					<MetalCard
						key={index}
						image={product.image}
						name={product.name}
						meta={product.meta}
						description={product.description}
						markup={product.markup}
						addToCart={props.addToCart}
						goldSpot={props.goldSpot}
						silverSpot={props.silverSpot}
					/>
				))
			}
		</Card.Group>
	);
}

const MetalCard = (props) => {
	// console.log(props);
	return (
		<Card
			image={props.image}
			header={props.name}
			meta={props.meta}
			description={props.description}
			extra={
				<div>
      		<h2>{props.silverSelected ? `$${(props.silverSpot * props.markup).toFixed(2)}` : `$${parseFloat(props.goldSpot * props.markup).toFixed(2)}`}</h2>
        	<Input
        		fluid
        		action={
        			<Button
        				color='green'
        				content='Add to Cart'
        				onClick={() => {
        					props.addToCart();
        				}}
        			/>
        		}
        		placeholder='0'

        	/>
      	</div>
			}
		/>
	);
}

export default Static;
