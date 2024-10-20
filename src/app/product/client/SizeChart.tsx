'use client'

import { useState } from "react"
import Image from "next/image"
import Icon from "@/shared/components/Icon"
import { type SizeChartType } from "@/shared/helper/types"

const SizeChart = ({ category, children = '' }: SizeChartType): React.ReactNode => {
  const [isChartOpen, setIsChartOpen] = useState(false)

  return (
    <>
      <button
        className="size-chart-btn"
        type="button"
        onClick={() => setIsChartOpen(true)}
      >
        <Icon name="table-chart" />
        Size Chart
      </button>
      {
        isChartOpen && (
          <div className="size-chart-modal">
            <Icon name="modal-design" className="modal-design" />
            <div className="size-chart-modal-body">
              <button
                className="size-chart-modal-close"
                type="button"
                aria-label="close modal"
                onClick={() => setIsChartOpen(false)}
              >
                <Icon name="close" />
              </button>
              {children}
              <span className="value-info">Value in Inches*</span>
              <table className="size-chart-modal-table">
                <thead>
                  <tr>
                    <td>Size</td>
                    <td>Chest</td>
                    <td>Length</td>
                    <td>Shoulder</td>
                    <td>Sleeve</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S</td>
                    <td>37</td>
                    <td>26.5</td>
                    <td>16.5</td>
                    <td>7.5</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>39</td>
                    <td>27.5</td>
                    <td>17.25</td>
                    <td>7.25</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>41</td>
                    <td>28.5</td>
                    <td>17.75</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>43</td>
                    <td>29</td>
                    <td>18.5</td>
                    <td>8.25</td>
                  </tr>
                  <tr>
                    <td>XXL</td>
                    <td>45</td>
                    <td>29.5</td>
                    <td>19.5</td>
                    <td>8.75</td>
                  </tr>
                  <tr>
                    <td>3XL</td>
                    <td>47</td>
                    <td>30.5</td>
                    <td>20</td>
                    <td>9.25</td>
                  </tr>
                  <tr>
                    <td>4XL</td>
                    <td>49</td>
                    <td>31.5</td>
                    <td>21</td>
                    <td>9.75</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <Image
                  src="/images/t-shirt-chart.webp"
                  alt="Size chart"
                  width={300}
                  height={300}
                  quality={100}
                  className="chart-img"
                />
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default SizeChart
