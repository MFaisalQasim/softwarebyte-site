import React, { useEffect, useState } from 'react';
import apiData from '../services/wordpressApi';
import parse from "html-react-parser";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
export default function PostTitles({numberOfPosts}) {
    const [posts, setPosts] = useState([]);
    const columnsPerRow = 4;
    const getPostsData = async () => {
        try {
          await apiData
            .getPosts(numberOfPosts)
            .then((data) => {    
              setPosts(data.json);
            });
        } catch (err) {
          console.log(err);
        }
      };
      const getColumnsForRow =()=>{
        let items = posts.map((post, index) => {
          return ( 
            <Col>
            <Card key={post.id}>
            <Card.Body>
              <Card.Title>{parse(post.title.rendered)}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{post.categories[0]}</Card.Subtitle>
              <Card.Text>
                {parse(post.excerpt.rendered)}
              </Card.Text>
              <Card.Link href={post.link}>View post</Card.Link>                 
            </Card.Body>
          </Card>
        </Col>
          );
   
      });
      return items;
    };
    useEffect(() => {
        getPostsData();        
   })
  return (
    <Container>
          <Row xs={1} md={columnsPerRow}>
             {getColumnsForRow()}
          </Row>
      </Container>  
      );
  
};
 