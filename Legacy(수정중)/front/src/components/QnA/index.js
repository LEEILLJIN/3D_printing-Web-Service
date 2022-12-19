import React from 'react'
import {
    Container,
    QnAIndexContainer,
    QnAInfoContainer,
    QnADetailIndexContainer,
    QnAIndexMessage,
    QnAInfoMessage,
    QnADetailIndexMessage,
   PrintingInfo,
   GCodeViewerContainer,
   PaymentBtnContainer,
   Context,
   PrintingInfoMessage,
   Smalltitle,
   Message,
   MessageGroup1,
   MessageGroup2
} from './QnAElements'

const QnA= () => {
  return (
    <>
         <Container>            
            <QnAIndexContainer>
                <QnAIndexMessage>
                    QnA 목록1
                </QnAIndexMessage>
                <QnAIndexMessage>
                    QnA 목록2
                </QnAIndexMessage>
            </QnAIndexContainer>
            <QnAInfoContainer>
                <QnAInfoMessage>
                        QnA 세부 내용
                </QnAInfoMessage>
            </QnAInfoContainer>
            <QnADetailIndexContainer>
                <QnADetailIndexMessage>
                    QnA 세부 내용 목차
                </QnADetailIndexMessage>
            </QnADetailIndexContainer>
        </Container>
    </>
  )
}

export default QnA