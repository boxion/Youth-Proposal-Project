//카카오톡 공유
function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '쓰레기 위치 확인 서비스',
            description: '#청년제안프로젝트 #404NotFound',
            imageUrl: './썸네일 이미지 경로',
            link: {
                mobileWebUrl: '배포 URL을 넣어주세요',
                webUrl: '배포 URL을 넣어주세요',
            },
        },
        buttons: [
            {
                title: '쓰레기통 위치 확인하러 가기!!',
                link: {
                    mobileWebUrl: '배포 URL을 넣어주세요',
                    webUrl: '배포 URL을 넣어주세요',
                },
            },
        ],
    })
}