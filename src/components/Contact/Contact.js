import React from 'react'
import {Container, Row, Col ,Form ,Button} from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    /*
    機能追加用コメント
    const handleSubmit = async (event) => {
        ここにバックエンドサーバへリクエスト内容を記載
    }
    */
    return (
    <Container className = "contact-container">
        <Row className = "justify-content-md-center">
            <Col md = {6}>
                <h2 className="contact-heading">Contact</h2>
                {/*
                機能追加用コメント
                summitを機能する場合
                <Form onSubmit={handleSubmit}>
                */}
                <Form>
                    <Form.Group controlID="formName" className="form-content">
                        <Form.Label>氏名</Form.Label>
                        <Form.Control type="text" placeholder='名前を入力してください' />
                    </Form.Group>
                    <Form.Group controlID="formEmail" className="form-content">
                        <Form.Label>メールアドレス</Form.Label>
                        <Form.Control type="text" placeholder='メールアドレスを入力してください' />
                    </Form.Group>
                    <Form.Group controlID="formMeassage" className="form-content">
                        <Form.Label>問い合わせ内容</Form.Label>
                        <Form.Control as="textarea" rows={5} type="text" placeholder='問い合わせ内容を入力してください' />
                    </Form.Group>
                    <div className="text-center">
                        <Button type="submmit" className="submit-button">
                            送信
                        </Button>
                        <p>※現在、本問い合わせ機能は停止しております</p>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
    )
}

export default Contact