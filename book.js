/* =========================================
   BOOKING PAGE — book.js
   Reads ?room=X from URL, populates the
   summary panel, and sends booking info
   to WhatsApp on form submit.
   ========================================= */

const WHATSAPP_NUMBER  = '212670826124';
const PRICE_PER_NIGHT  = 340;

const ROOMS = {
  1: {
    name:     'Menzah Bellota — Room 1',
    subtitle: 'Double Room · Mountain Stillness',
    img:      'images/room 1.webp',
    beds:     '🛏️  1 Double Bed',
    guests:   '👥  Max 2 Guests',
  },
  2: {
    name:     'Menzah Bellota — Room 2',
    subtitle: 'Twin Room · Perfect for Friends',
    img:      'images/room 2.webp',
    beds:     '🛏️  2 Single Beds',
    guests:   '👥  Max 2 Guests',
  },
  3: {
    name:     'Menzah Bellota — Room 3',
    subtitle: 'Twin Room · Natural Light',
    img:      'images/room 3.webp',
    beds:     '🛏️  2 Single Beds',
    guests:   '👥  Max 2 Guests',
  },
  4: {
    name:     'Menzah Bellota — Room 4',
    subtitle: 'Berber Room · Full of Color',
    img:      'images/room 4.webp',
    beds:     '🛏️  2 Single Beds',
    guests:   '👥  Max 3 Guests',
  },
  5: {
    name:     'Menzah Bellota — Room 5',
    subtitle: 'Heritage Room · Wooden Beams',
    img:      'images/room 5.webp',
    beds:     '🛏️  2 Single Beds',
    guests:   '👥  Max 3 Guests',
  },
};

/* ---- 1. Read ?room= param & populate summary ---- */
function loadRoom() {
  const params = new URLSearchParams(window.location.search);
  const roomId = parseInt(params.get('room')) || 1;
  const room   = ROOMS[roomId] || ROOMS[1];

  document.getElementById('summaryImg').src             = room.img;
  document.getElementById('summaryImg').alt             = room.name;
  document.getElementById('summaryRoomNum').textContent = String(roomId).padStart(2, '0');
  document.getElementById('summaryName').textContent    = room.name;
  document.getElementById('summarySubtitle').textContent = room.subtitle;
  document.getElementById('summaryBeds').textContent    = room.beds;
  document.getElementById('summaryGuests').textContent  = room.guests;
  document.getElementById('hiddenRoom').value           = room.name;
  document.title = `Book ${room.name} — Menzah Bellota`;
}

/* ---- 2. Flatpickr date pickers ---- */
function setupDatePickers() {
  const nightsSummary = document.getElementById('nightsSummary');
  const nightsText    = document.getElementById('nightsText');
  const totalPrice    = document.getElementById('totalPrice');
  const checkInEl     = document.getElementById('checkIn');
  const checkOutEl    = document.getElementById('checkOut');

  const commonConfig = {
    dateFormat:    'd M Y',
    minDate:       'today',
    disableMobile: true,
    locale: {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        longhand:  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      },
      months: {
        shorthand: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        longhand:  ['January','February','March','April','May','June','July','August','September','October','November','December'],
      },
    },
  };

  const fpIn = flatpickr(checkInEl, {
    ...commonConfig,
    onClose(selectedDates) {
      if (selectedDates[0]) {
        fpOut.set('minDate', new Date(selectedDates[0].getTime() + 86400000));
        fpOut.open();
      }
      updateNights();
    },
  });

  const fpOut = flatpickr(checkOutEl, {
    ...commonConfig,
    onClose() { updateNights(); },
  });

  function updateNights() {
    if (!checkInEl.value || !checkOutEl.value) {
      nightsSummary.style.display = 'none';
      return;
    }
    const nights = Math.round((fpOut.selectedDates[0] - fpIn.selectedDates[0]) / 86400000);
    if (nights > 0) {
      nightsText.innerHTML  = `${nights} night${nights > 1 ? 's' : ''} &nbsp;·&nbsp; ${PRICE_PER_NIGHT} DH/night = `;
      totalPrice.textContent = `${nights * PRICE_PER_NIGHT} DH`;
      nightsSummary.style.display = 'flex';
    }
  }
}

/* ---- 3. Form → WhatsApp ---- */
function setupForm() {
  const form = document.getElementById('bookForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name     = document.getElementById('guestName').value.trim();
    const email    = document.getElementById('guestEmail').value.trim();
    const phone    = document.getElementById('guestPhone').value.trim();
    const checkIn  = document.getElementById('checkIn').value.trim();
    const checkOut = document.getElementById('checkOut').value.trim();
    const adults   = document.getElementById('guestAdults').value;
    const children = document.getElementById('guestChildren').value;
    const message  = document.getElementById('guestMessage').value.trim();
    const roomName = document.getElementById('hiddenRoom').value;

    if (!checkIn || !checkOut) {
      document.getElementById('checkIn').focus();
      return;
    }

    const lines = [
      '🏡 *BOOKING REQUEST — Menzah Bellota*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `🛏️ *Room:* ${roomName}`,
      `💰 *Price:* ${PRICE_PER_NIGHT} DH / night`,
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${name}`,
    ];

    if (phone)  lines.push(`📞 *Phone:* ${phone}`);
    if (email)  lines.push(`📧 *Email:* ${email}`);
    lines.push(`📅 *Check-in:*  ${checkIn}`);
    lines.push(`📅 *Check-out:* ${checkOut}`);
    lines.push(`👨‍👩‍👧 *Guests:* ${adults} adult(s)${children !== '0' ? `, ${children} child(ren)` : ''}`);

    if (message) {
      lines.push('━━━━━━━━━━━━━━━━━━━━━');
      lines.push(`💬 *Message:*\n${message}`);
    }

    lines.push('━━━━━━━━━━━━━━━━━━━━━');
    lines.push('_Sent from menzahbellota.ma_');

    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;

    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Opening WhatsApp…';
    btn.disabled = true;

    setTimeout(() => {
      window.open(waURL, '_blank');
      setTimeout(() => {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.55 4.078 1.504 5.797L0 24l6.383-1.474A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.028-1.38l-.36-.214-3.733.862.888-3.617-.235-.372A9.772 9.772 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
          </svg>
          Send Booking Request via WhatsApp`;
        btn.disabled = false;
      }, 3000);
    }, 600);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadRoom();
  setupDatePickers();
  setupForm();
});
