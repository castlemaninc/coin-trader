import React, { Component } from 'react';
import { Menu, Button, Container, Card, Header } from 'semantic-ui-react';

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
      <Menu.Item position='right'>
        Cart
      </Menu.Item>
    	</Menu>
    	<Container>
			<Button.Group>
				<Button color='yellow'>Buy Gold</Button>
				<Button color='gray'>Buy Silver</Button>				  
			</Button.Group>
			</Container>
    	<Container>    		

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
						image='https://www.itmtrading.com/content/images/thumbs/0003740_2018-1-oz-austrian-silver-philharmonic_360.jpeg'
	          header='1 oz 2018 Austrian Silver Philharmonic'
	          meta='1 oz of Silver'
	          description='.999 FINE SILVER' 

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

