import React from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CBadge,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const DetailViewLayout = ({
  title,
  subtitle,
  status,
  onBack,
  tabs,
  activeTab,
  onTabChange,
  children,
  actions,
}) => {
  return (
    <CCard className="mb-4">
      <CCardHeader>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CButton color="link" className="text-decoration-none p-0 me-3" onClick={onBack}>
              <CIcon icon={cilArrowLeft} className="me-2" />
              Volver
            </CButton>
            <div>
              <h5 className="mb-0">{title}</h5>
              {subtitle && <small className="text-medium-emphasis">{subtitle}</small>}
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            {status && <CBadge color={status.color}>{status.text}</CBadge>}
            {actions}
          </div>
        </div>
      </CCardHeader>
      <CCardBody>
        {tabs && (
          <>
            <CNav variant="tabs" role="tablist">
              {tabs.map((tab) => (
                <CNavItem key={tab.id}>
                  <CNavLink
                    active={activeTab === tab.id}
                    onClick={() => onTabChange(tab.id)}
                  >
                    <CIcon icon={tab.icon} className="me-2" />
                    {tab.label}
                  </CNavLink>
                </CNavItem>
              ))}
            </CNav>
            <CTabContent className="mt-4">
              {children}
            </CTabContent>
          </>
        )}
        {!tabs && children}
      </CCardBody>
    </CCard>
  )
}

DetailViewLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  status: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  onBack: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ),
  activeTab: PropTypes.number,
  onTabChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
}

export default DetailViewLayout 