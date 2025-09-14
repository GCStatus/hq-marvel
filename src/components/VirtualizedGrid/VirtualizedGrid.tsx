import { memo, ReactNode } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeGrid as Grid } from 'react-window'

interface VirtualizedGridProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  aspectRatio: number
}

const COLUMN_GUTTER = 40
const ROW_GUTTER = 80

const getColumnCount = (width: number) => {
  if (width >= 1280) return 4
  if (width >= 840) return 3
  if (width >= 560) return 2
  return 1
}

const Cell = memo(({ columnIndex, rowIndex, style, data }: any) => {
  const { items, columnCount, renderItem } = data
  const index = rowIndex * columnCount + columnIndex
  const item = items[index]

  if (!item) return null

  return (
    <div style={style}>
      <div
        style={{
          padding: `${ROW_GUTTER / 2}px ${COLUMN_GUTTER / 2}px`,
          height: '100%',
        }}>
        {renderItem(item)}
      </div>
    </div>
  )
})

Cell.displayName = 'CellComponent'

function VirtualizedGrid<T>({
  items,
  renderItem,
  aspectRatio,
}: VirtualizedGridProps<T>) {
  const itemCount = items.length

  return (
    <div style={{ flex: '1 1 auto', width: '100%' }}>
      <AutoSizer disableHeight>
        {({ width }) => {
          if (width === 0) return null

          const columnCount = getColumnCount(width)
          const columnWidth = width / columnCount

          const rowHeight =
            (columnWidth - COLUMN_GUTTER) * aspectRatio + ROW_GUTTER
          const rowCount = Math.ceil(itemCount / columnCount)
          const totalGridHeight = rowCount * rowHeight

          const itemData = {
            items,
            renderItem,
            columnCount,
          }

          return (
            <Grid
              itemData={itemData}
              height={totalGridHeight}
              style={{ overflow: 'visible' }}
              width={width}
              columnCount={columnCount}
              columnWidth={columnWidth}
              rowCount={rowCount}
              rowHeight={rowHeight}>
              {Cell}
            </Grid>
          )
        }}
      </AutoSizer>
    </div>
  )
}

export default memo(VirtualizedGrid) as typeof VirtualizedGrid
