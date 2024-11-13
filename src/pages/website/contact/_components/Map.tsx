import { Card } from 'antd'

const Map = () => {
  return (
    <div>
          <Card title="Vị trí cửa hàng" bordered={false} style={{ width: "100%" }}>
        <div className="w-full h-[400px] relative overflow-hidden shadow-lg rounded-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7039248655784!2d106.65726167663305!3d10.762915262319672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef16df69be7%3A0x5050fc5a8f9bb007!2zMTgyIMSQw7QgTMOqIMSQw6DpIEjDoG5oLCBQaMaw4budbmcgMTUsIFF14bqtbiAxMSwgSOG7kSBDaMOtbmggTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1697372372525!5m2!1svi!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </Card>
    </div>
  )
}

export default Map