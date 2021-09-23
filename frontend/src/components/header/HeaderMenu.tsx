import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, SyntheticEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';

interface Props {
  title: string;
  items: {
    name: string;
    path: string;
  }[];
}

const HeaderMenu: FC<Props> = ({ title, items }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="headerMenu">
      <Box
        sx={{
          color: '#eeeeee',
          fontSize: '18px',
          cursor: 'pointer',
          fontWeight: 'bolder',
        }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {title}
        <img className="headerArrowIcon" src="/images/icons/chevron-right.png" alt="dropdown" />
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  {items.map((item) => {
                    return (
                      <MenuItem
                        key={item.name}
                        onClick={(e) => {
                          handleClose(e);
                          history.push(item.path);
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default HeaderMenu;
