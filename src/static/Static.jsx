import React, { Component } from 'react';
import { Menu, Button, Container, Divider, Card, Header } from 'semantic-ui-react';

const Static = () => {



	return(
		<div>
			<Menu size='huge' inverted borderless>
      <Menu.Item>
        Spot $16.49
      </Menu.Item>
      <Menu.Item>
      	Change 0.55% 
      </Menu.Item>
      <Menu.Item position='right' icon='shopping cart'>        
      </Menu.Item>
      <Menu.Item>
      	0
      </Menu.Item>
    	</Menu>
    	<Container>
			<Button.Group>
				<Button color='yellow'>Buy Gold</Button>
				<Button color='gray'>Buy Silver</Button>				  
			</Button.Group>
			</Container>

			<Divider />

    	<Container>    		

				<Card.Group itemsPerRow={4}>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003733_2018-1-oz-american-gold-eagle_360.png'
            header='2018 American Eagle'
            meta='1 oz of Gold'
            description='.9167 FINE GOLD' 
            
            extra={
            	<Button fluid positive>Add to Cart</Button>
            }
					/>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003799_2018-1-oz-american-gold-buffalo_360.png'
	          header='2018 American Gold Buffalo'
	          meta='1 oz of Gold'
	          description='.9999 FINE GOLD' 

	          extra={
	          	<Button fluid positive>Add to Cart</Button>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003737_2018-1-oz-austrian-gold-philharmonic_360.jpeg'
	          header='2018 Austrian Gold Philharmonic'
	          meta='1 oz of Gold'
	          description='.9999 FINE GOLD' 

	          extra={
	          	<Button fluid positive>Add to Cart</Button>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003749_2018-1-oz-great-britain-gold-britannia_360.png'
	          header='2018 Great Britain Gold Brittania'
	          meta='1 oz of Gold'
	          description='.9999 FINE GOLD' 

	          extra={
	          	<Button fluid positive>Add to Cart</Button>
	          }
					/>
				</Card.Group>

				<Card.Group itemsPerRow={4}>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003791_2018-1-oz-american-silver-eagle_360.png'
            header='1 oz 2018 American Eagle'
            meta='1 oz of Silver'
            description='.999 FINE SILVER' 
            
            extra={
            	<Button fluid positive>Add to Cart</Button>
            }
					/>
					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003731_2018-1-oz-canadian-silver-maple-leaf_360.png'
	          header='1 oz 2018 Canadian Maple Leaf'
	          meta='1 oz of Silver'
	          description='.9999 FINE SILVER' 

	          extra={
	          	<Button fluid positive>Add to Cart</Button>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0003740_2018-1-oz-austrian-silver-philharmonic_360.jpeg'
	          header='1 oz 2018 Austrian Silver Philharmonic'
	          meta='1 oz of Silver'
	          description='.999 FINE SILVER' 

	          extra={
	          	<Button fluid positive>Add to Cart</Button>
	          }
					/>

					<Card 
						image='https://www.itmtrading.com/content/images/thumbs/0001043_morgan_silver_dollar_brilliant_uncirculated_360.png'
	          header='Morgan Silver Dollar 1878-1894'
	          meta='.7735 oz of Silver'
	          description='90% silver 10% copper' 

	          extra={
	          	<Button fluid positive>Add to Cart</Button>
	          }
					/>
				</Card.Group>
			</Container>


		</div>

		
	);
}

const InfoHeader = () => {
	return (
	 <Menu size='huge' inverted borderless>
      <Menu.Item>
        Spot $16.49
      </Menu.Item>
      <Menu.Item>
      	Change 0.55% 
      </Menu.Item>
      <Menu.Item position='right'>
        Cart
      </Menu.Item>
    </Menu>
	);
}



export default Static; 

