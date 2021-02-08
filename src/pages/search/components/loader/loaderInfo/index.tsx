import React from "react"
import ContentLoader from "react-content-loader"

const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={846}
    height={260}
    viewBox="0 0 846 260"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="8" ry="8" width="846" height="260" />
  </ContentLoader>
)

export default InfoLoader